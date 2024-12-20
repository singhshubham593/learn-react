import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    /*
    first way
    const [data,setData]=useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/singhshubham593')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
    */

    return (
       <div className='bg-gray-500 text-white text-2xl p-4'>
            Github Follower: {data.followers}
       </div> 
    )
}

export default Github

// second way= optimised approach
export const githubInfoLoader = async () => {
    const responce= await fetch('https://api.github.com/users/singhshubham593')
    return responce.json()
}