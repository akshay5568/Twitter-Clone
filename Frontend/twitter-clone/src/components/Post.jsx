import { NavLink } from "react-router-dom";
import { FaImage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPhotoVideo } from "react-icons/fa";

function Post() {
  const userDetails = useSelector((state) => state.user.user);
  const [textContent, setTextContent] = useState("");
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("token");

  const handlerForm = async (e) => {
    e.preventDefault();
    if (token) {
      const formData = new FormData();
      formData.append("textContent", textContent);
      if (file) {
        formData.append("file", file);
      }

      try {
        const res = await axios.post(
          "http://localhost:8080/api/user-posts",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("✅ Post created:", res.data);
      } catch (error) {
        console.error(
          "❌ Upload error:",
          error.response?.data || error.message
        );
      }
      setTextContent("");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="w-full bg-black h-full">
      <div className="w-full h-fit p-2 border-t-1 border-gray-800">
        <div className="flex text-white gap-3 p-3">
          <div className="w-[10%]">
            <NavLink to="/profile">
              <img
                className="w-[3vw] h-[3vw] rounded-full cursor-pointer"
                src={userDetails.profileImg}
                alt=""
              />
            </NavLink>
          </div>

          <div className="w-[90%]">
            <form action="" className="" onSubmit={handlerForm}>
              <textarea
                className="border-b-1 border-b-gray-600 w-full text-xl outline-none"
                placeholder="What's happening?"
                id=""
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                required
              ></textarea>
              <br />
              <div className="flex items-center justify-between">
                <input
                  className="hidden"
                  type="file"
                  placeholder="Image"
                  accept="image/*,video/*"
                  id="file-upload"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-3"
                >
                  <FaImage className="text-[#1d9bf0]  cursor-pointer" />
                  <FaPhotoVideo className="text-[#1d9bf0]  cursor-pointer" />
                </label>

                <button className="px-3 p-1 bg-white rounded-full text-black   cursor-pointer font-semibold">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
