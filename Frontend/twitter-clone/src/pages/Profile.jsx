import { FaArrowLeft } from "react-icons/fa";

function Profile() {
  return (
    <div className="w-full h-fit bg-black text-white border-1 border-gray-800">
      <div className="flex items-center gap-3 h-[3vw] w-full bg-black p-2">
        <button>
          <FaArrowLeft />
        </button>
        <h3>Aditya Jangid</h3>
      </div>

      <div className="w-full h-fit relative">
        <div className="h-[15vw]">
          <img
            className="h-full w-full object-fit"
            src="https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2VybWFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-full h-fit p-3">
          <div className="w-[10vw] h-[10vw] absolute rounded-full top-35">
            <img
              className="rounded-full absolute w-full h-full"
              src="https://images.unsplash.com/photo-1680763921539-afae7b2c219e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VybWFuJTIwQWN0b3J8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>

          <div className="mt-15">
            <h3 className="font-semibold text-xl">Aditya Jangid</h3>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
              <h3>{4} Following</h3>
              <h3>{4} Followers</h3>
            </div>
          </div>
        </div>

        <div className="w-full h-fit p-3 border-b-1 border-gray-800">
          <div className="font-semibold">Posts</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
