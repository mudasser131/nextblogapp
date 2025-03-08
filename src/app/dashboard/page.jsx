

'use client' // ✅ This ensures it's a Client Component

import React from 'react'
import useSWR from 'swr' 

const Dasboard = () => {




const fetcher = (...args) => fetch(...args).then(res => res.json())

const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)


  console.log(data);
  


  return (
    <div>
      <div>Dashboard!</div>
    </div>
  )
}

export default Dasboard
