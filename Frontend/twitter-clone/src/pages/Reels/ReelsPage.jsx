function ReelsPage() {
  return (
    <div className="border-1 border-gray-800 w-full h-full">
      <div className="w-full h-fit flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-fit"
          src="https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/cld-sample-video.mp4"
        ></video>
      </div>
    </div>
  );
}

export default ReelsPage;
