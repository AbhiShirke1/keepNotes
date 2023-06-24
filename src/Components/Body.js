import React from 'react'
import './Body.css'

const Body = (props) => {
    // console.log(Ndata[0]);
    return (
        <>
        {/* <div className="main3"> */}
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="" className="heading_style"/>
                <div className="card_info"> 
                <sapn className="card_category">A Netflix Original Series</sapn>
                <h3 className="card_title" >{props.names}</h3>
                <a href={props.link} target='_blank'>
                    <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
        {/* </div> */}
        
        
        </>
    )
}

export default Body
