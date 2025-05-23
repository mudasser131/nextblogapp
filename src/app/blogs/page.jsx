import React from 'react';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { 
    next: { revalidate: 10 } // Fetch fresh data every 10 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-7">Latest Blog Posts</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 border border-gray-300"
          >
            {/* Blog Post Image */}
            <img 
              src="https://images.unsplash.com/photo-1726056652684-9c135013cef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
              alt={item.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Blog Title */}
            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>

            {/* Blog Content */}
            <p className="text-gray-700 mt-3">{item.body.substring(0, 100)}...</p>

            {/* User & Post Info */}
            <div className="mt-4 text-sm text-gray-500 border-t pt-4 flex justify-between">
              <span>User ID: <strong>{item.userId}</strong></span>
              <span>Post ID: <strong>{item.id}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
