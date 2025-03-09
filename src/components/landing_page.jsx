import React from 'react'
import { motion } from "framer-motion";
import "./landing_page.css"

const landing_page = () => {
    return (
        <div>
            <div className="main">
                <h1 className='cont left1'>Digital</h1>
                <hi className="cont left2">experiences</hi>
                <h1 className='cont right'> that </h1>
                <h1 className="cont center">Win by Design</h1>
            </div>
            <div className="video_container" >
                <video src="home_video.mp4" autoPlay loop muted  ></video>
            </div>
            <div className="about"> 
                <motion.div
                    
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }} 
                >
                    <h3 className="hthree">RocketAir is a design and strategy <br /> company with an adaptive approach to <br /> problem solving.</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default landing_page