import React from 'react';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound(); // Return Not Found for invalid post
  }

  return res.json(); // Returns a single object
}

const Blogpost = async ({ params }) => {
  const data = await getData(params.id); // Correctly access id

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 border mt-8">
        {/* Centered Blog Post Image */}
        <img 
          src="https://images.unsplash.com/photo-1739992115892-36453a241b5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" 
          alt={data.title}
          className="w-3/4 max-w-sm mx-auto block rounded-lg mb-4"
        />
    
        {/* Blog Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">{data.title}</h2>
    
        {/* Blog Content */}
        <p className="text-lg leading-relaxed mb-6">{data.body}</p>
    
        {/* User & Post Info */}
        <div className="flex justify-between text-sm border-t pt-4">
          <span>User ID: <strong>{data.userId}</strong></span>
          <span>Post ID: <strong>{data.id}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
