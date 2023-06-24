import React, { useEffect, useState } from 'react'
import { Lname } from '../App'

const ComC = () => {
    useEffect(()=>{
        alert("hi")
    })

    const [num, setNum] = useState(0);

    const fun=()=>{
        setNum(num+1)
    }
  return (
    <>
        <button onClick={fun}>Click me {num}</button>
    </>
  )
}

export default ComC
    
 