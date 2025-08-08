import { FaLongArrowAltRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbBounceRightFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Premium() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit bg-black text-white ">
      <div className="h-fit">
        <div>
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-5 bg-red-400 rounded-full text-2xl"
          >
            <RxCross2 />
          </button>
          <div className="text-center w-full pt-15">
            <h1 className="text-5xl font-bold">Upgrade to Premium</h1>
            <p className="text-gray-500 mt-3">
              Enjoy an enhanced experience, exclusive creator tools, top-tier
              verification and security. <br />
              (For organizations, sign up here)
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full gap-3 mt-7">
          <div className="w-[22%] h-[33vw]  bg-[#16181c] rounded-xl p-3">
            <div className="flex">
              <h1 className="text-2xl">Basic</h1>
              <button type="radio"></button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <h4 className="text-3xl font-semibold">₹{141.67}</h4>
              <span>/ month</span>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-gray-600">₹{1700} billed annaully</h4>
              <span className="bg-[#00251a] text-xs px-2 text-[#c1f1dc] rounded-full font-semibold">
                SAVE 16%
              </span>
            </div>

            <ul className="mt-3">
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Small reply boost
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Bookmark folders
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Highlights tab
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Edit post
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Longer posts
              </li>
            </ul>
          </div>

          <div className="w-[22%] h-[33vw] bg-[#16181c] rounded-xl p-3">
            <div className="flex">
              <h1 className="text-2xl">Premium</h1>
              <button type="radio"></button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <h4 className="text-3xl font-semibold">₹{356}</h4>
              <span>/ month</span>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-gray-600">₹{4272} billed annaully</h4>
              <span className="bg-[#00251a] text-xs px-2 text-[#c1f1dc] rounded-full font-semibold">
                SAVE 16%
              </span>
            </div>

            <ul className="mt-3">
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Half Ads in For You and Following
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Larger reply boost
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Get paid to post
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                CheckmarkGrok with increased limits
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />X Pro, Analytics, Media Studio
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Creator Subscriptions
              </li>
            </ul>
          </div>

          <div className="w-[22%] h-[33vw] bg-[#16181c] rounded-xl p-3">
            <div className="flex">
              <h1 className="text-2xl">Premium+</h1>
              <button type="radio"></button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <h4 className="text-3xl font-semibold">₹{2200}</h4>
              <span>/ month</span>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-gray-600">₹{24400} billed annaully</h4>
              <span className="bg-[#00251a] text-xs px-2 text-[#c1f1dc] rounded-full font-semibold">
                SAVE 16%
              </span>
            </div>

            <ul className="mt-3">
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Fully ad-free
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Larger reply boost
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Write Articles
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaLongArrowAltRight />
                Radar
              </li>

              <div className="w-[95%] bg-[#212327] h-[11vw] rounded-md m-auto mt-6 p-2">
                <h1 className="text-xl mb-2">SuperGrok</h1>
                <ul>
                  <li className="flex items-center gap-2 mb-1">
                    <FaLongArrowAltRight />
                    Highest usage limits
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <FaLongArrowAltRight />
                    Use Grok 4, our most powerful model
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <FaLongArrowAltRight />
                    Early access to new features
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <div className="w-[67%] h-fit m-auto mt-7">
          <div>
            <h2 className="text-2xl font-semibold">Compare tiers & features</h2>
          </div>

          <div className=" h-fit bg-[#16181c] rounded-md mt-7 p-5">
            <div className="">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="font-semibold text-base">
                    <th>Enhanced Experience</th>
                    <th>Basic</th>
                    <th>Premium</th>
                    <th>Premium+</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-1 border-t-1 border-gray-800 mt-2">
                    <td className="pb-3  pt-3">Ads</td>
                    <td className="pb-3  pt-3">No reduction</td>
                    <td className="pb-3  pt-3">Half in For You & Following</td>
                    <td className="pb-3  pt-3">Fully ad-free</td>
                  </tr>
                  <tr className="border-b-1  border-gray-800 mt-2">
                    <td className="pb-3  pt-3">Reply boost</td>
                    <td className="pb-3  pt-3">Smallest</td>
                    <td className="pb-3  pt-3">Larger</td>
                    <td className="pb-3  pt-3">Largest</td>
                  </tr>

                  <tr className="border-b-1  border-gray-800 mt-2">
                    <td className="pb-3  pt-3">Radar</td>
                    <td className="pb-3  pt-3 text-gray-600">
                      <RxCross2 />
                    </td>
                    <td className="pb-3  pt-3 text-gray-600">
                      <RxCross2 />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                  </tr>

                  <tr className="border-b-1  border-gray-800 mt-2">
                    <td>Edit post</td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                  </tr>

                  <tr className="border-b-1  border-gray-800 mt-2">
                    <td>Longer posts</td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                  </tr>

                  <tr className="border-b-1  border-gray-800 mt-2">
                    <td>Background video playback</td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                  </tr>

                  <tr className=" border-gray-800 mt-2">
                    <td>Download videos</td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                      <TbBounceRightFilled />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" bg-[#16181c] p-3 rounded-md mt-4">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="font-semibold text-base">
                  <th>Grok AI</th>
                  <th>Basic</th>
                  <th>Premium</th>
                  <th>Premium+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-1 border-t-1 border-gray-800 mt-2">
                  <td className="pb-3  pt-3">Usage limits</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3">Higher</td>
                  <td className="pb-3  pt-3">Highest</td>
                </tr>
                <tr className="border-b-1  border-gray-800 mt-2">
                  <td className="pb-3  pt-3">SuperGrok</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>

                <tr className="border-b-1  border-gray-800 mt-2">
                  <td className="pb-3  pt-3">Early access to new features</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#16181c] p-3 rounded-md mt-4">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="font-semibold text-base">
                  <th>Created Hub</th>
                  <th>Basic</th>
                  <th>Premium</th>
                  <th>Premium+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-1 border-t-1 border-gray-800 mt-2">
                  <td className="pb-3  pt-3">Write Articls</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                     <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                      <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>
                <tr className="border-b-1  border-gray-800 mt-2">
                  <td className="pb-3  pt-3">Get paid to post</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                      <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                   <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>

                <tr className="border-b-1  border-gray-800 mt-2">
                  <td className="pb-3  pt-3">Creator Subscriptions</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                    <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>

                <tr className="border-b-1  border-gray-800 mt-2">
                  <td>X Pro</td>
                  <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>

                <tr className="border-b-1  border-gray-800 mt-2">
                  <td>Media Studio</td>
                   <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>

                <tr className="border-b-1  border-gray-800 mt-2">
                  <td>Analytics</td>
                <td className="pb-3  pt-3 text-gray-600">
                    <RxCross2 />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                  <td className="pb-3  pt-3 text-[#00ba7c]">
                    <TbBounceRightFilled />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
