import { FaLongArrowAltRight } from "react-icons/fa";

function Premium() {
  return (
    <div className="w-full h-full bg-black text-white ">
      <div>
        <div>
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
      </div>
    </div>
  );
}

export default Premium;
