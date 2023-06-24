import React, { useState } from 'react'


const RealTime = () => {
    let now = new Date().toLocaleTimeString();
    console.log(now);
    const [time, setTime] = useState(now)

    const giveTime=()=>{
        now = new Date().toLocaleTimeString();
        setTime(now)
    }

    setInterval(giveTime, 1000)

  return (
    <div>
        <p>{time}</p>
        {/* <button onClick={giveTime}>Give exact time</button> */}
    </div>
  )
}

export default RealTime
