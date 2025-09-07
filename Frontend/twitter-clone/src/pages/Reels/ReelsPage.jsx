import { CgAddR } from "react-icons/cg";

function ReelsPage() {
  const videos = [
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/cld-sample-video.mp4",
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/sea-turtle.mp4",
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/elephants.mp4",
  ];

  return (
    <div className="border-1 border-gray-800 snap-y snap-mandatory w-full h-screen overflow-y-scroll ">
      {videos.map((video, index) => (
        <div
          key={index}
          className="w-full h-screen snap-start flex items-center justify-center"
        >
          <video
            autoPlay
            muted  
            playsInline
            className="w-auto h-fit object-cover"
            onClick={(e) => e.target.muted = !e.target.muted}
            src={video}
          ></video>

           <div className="absolute bottom-10 m-auto bg-white max-sm:bottom-20 p-2 rounded-md text-black px-8 flex items-center justify-center text-2xl">  
               <input className="hidden" type="file" id="ReelsID"/> 
               <label htmlFor="ReelsID"><CgAddR/></label>
          </div>
        </div>

        
      ))}
    </div>
  );
}

export default ReelsPage;
