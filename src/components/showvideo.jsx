import { useState, useEffect } from "react";

export default function VideoBoxes() {
    const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
        console.log(`Active Video: ${activeVideo}`);
    }, [activeVideo]); // Logs when the video changes

    return (
        <div className="boxes flex gap-4">
            {/* Box 1: Plays Video 1 */}
            <div
                className="box1 bg-blue-500 text-white p-4 cursor-pointer"
                onMouseEnter={() => setActiveVideo("/video1.mp4")}
                onMouseLeave={() => setActiveVideo(null)}
            >
                Box 1
            </div>

            {/* Box 2: Plays Video 2 */}
            <div
                className="box2 bg-green-500 text-white p-4 cursor-pointer"
                onMouseEnter={() => setActiveVideo("/video2.mp4")}
                onMouseLeave={() => setActiveVideo(null)}
            >
                Box 2
            </div>

            {/* Box 3: Doesn't trigger a video */}
            <div
                className="box3 bg-red-500 text-white p-4 cursor-pointer"
                onMouseEnter={() => setActiveVideo(null)}
            >
                Box 3
            </div>

            {/* Box 4: Displays Video Based on Hover */}
            <div className="box4 w-60 h-40 bg-gray-300 flex items-center justify-center overflow-hidden">
                {activeVideo ? (
                    <video key={activeVideo} src={activeVideo} autoPlay loop muted className="w-full h-full object-cover" />
                ) : (
                    <p>No Video</p>
                )}
            </div>
        </div>
    );
}


