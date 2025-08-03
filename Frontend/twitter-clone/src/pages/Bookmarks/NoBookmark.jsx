import { FaArrowLeft } from "react-icons/fa";


function NoBookmark() {
  return (
    <div className="w-full h-full border-1 border-gray-800">
      <div className="flex items-center gap-3 p-3 font-semibold text-xl"> 
            <button className="cursor-pointer"><FaArrowLeft/></button>
            <h2>Bookmarks</h2>
      </div>

      <div className="w-full h-full m-auto text-center mt-10">
        <h2 className="font-bold text-3xl">Save posts for later</h2>
        <h5 className="mt-2 text-gray-600">Bookmark posts to easily find them again in the future.</h5>
      </div>
    </div>
  );
}

export default NoBookmark;
