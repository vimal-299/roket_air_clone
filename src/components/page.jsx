import React from "react";
import { motion } from "framer-motion";
import "./page.css";

const textLines = [
    "We partner with",
    "forward-thinking",
    "enterprises and startups."
];

const Page = () => {
    return (
        <div className="page">
            {textLines.map((line, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{once:true, amount: 0.2 }} /* Animation starts when 20% of line is visible */
                >
                    <h2 className="h">{line}</h2>
                </motion.div>
            ))}
        </div>
    );
};

export default Page;
