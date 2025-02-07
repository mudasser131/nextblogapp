import React from 'react';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the data');
  }

  return res.json(); // Returns a single object
}

const Blogpost = async ({ params }) => {
  const data = await getData(params.id); // Pass id correctly

  return (
    <div className='h-[80vh]'>
    <div className="max-w-2xl mx-auto bg-white  shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 border border-gray-300 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{data.body}</p>
      <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
        <span>User ID: <strong>{data.userId}</strong></span>
        <span>Post ID: <strong>{data.id}</strong></span>
      </div>
    </div>
    </div>
  );
};

export default Blogpost;
