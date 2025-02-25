

'use client' // ✅ This ensures it's a Client Component

import React from 'react'
import useSWR from 'swr' 

const Dasboard = () => {

//   const [data, setData] = useState([]);
//   const [err, setErr] = useState(false);
//   const [isLoading, setIsloading] = useState(false);

//   useEffect(() => {

//     const getData = async () => {

//       setIsloading(true)

//       const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         cache: "no-store",
//       });

//       if (!res.ok) {

//         setErr(true);
//       }

// const data = await res.json()
// setData(data)
// setIsloading(false)

//     };

// getData()


//   } , []);


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
