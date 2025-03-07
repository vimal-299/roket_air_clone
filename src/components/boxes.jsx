import React from 'react'
import { useState, useEffect } from "react";
import "./boxes.css"


export default function boxes(){
    const [activeVideo, setActiveVideo] = useState(null);
    useEffect(() => {
        console.log(`Active Video: ${activeVideo}`);
    }, [activeVideo]);    
    return (
        <>
            <div className="boxes">
                <div className="box box1" onMouseEnter={()=>setActiveVideo("/video1.mp4")} onMouseLeave={()=>setActiveVideo(null)}>
                    <h2 className='htwo'>Brand </h2>
                    <p>Unique brand identities that make a mark.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />
                    

                </div>
                <div className="box box2" onMouseEnter={()=>setActiveVideo("/video2.mp4")} onMouseLeave={()=>setActiveVideo(null)}>
                    <h2 className='htwo'>Product</h2>
                    <p>Intuitive digital products that people get.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />
                    
                </div>
                <div className="box box3" onMouseEnter={()=>setActiveVideo("/video3.mp4")} onMouseLeave={()=>setActiveVideo(null)}>
                    <h2 className='htwo'>Motion</h2>
                    <p>Compelling animations that inspire actions.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />
                </div>
                <div className="box box4">
                {activeVideo ? (
                    <video key={activeVideo} src={activeVideo} autoPlay loop muted/>
                ) : (
                    null
                )}
                </div>


            </div>
        </>
    )

}


