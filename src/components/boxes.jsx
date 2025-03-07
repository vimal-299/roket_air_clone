import React from 'react'
import "./boxes.css"


const boxes = () => {
    return (
        <>
            <div className="boxes">
                <div className="box box1">
                    <h2 className='htwo'>Brand </h2>
                    <p>Unique brand identities that make a mark.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />


                </div>
                <div className="box box2">
                    <h2 className='htwo'>Product</h2>
                    <p>Intuitive digital products that people get.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />
                </div>
                <div className="box box3">
                    <h2 className='htwo'>Motion</h2>
                    <p>Compelling animations that inspire actions.</p>
                    <img className='image' src="/rigth_arrow.svg" alt="" />
                </div>
                <div className="box box4">

                </div>


            </div>
        </>
    )
}

export default boxes

