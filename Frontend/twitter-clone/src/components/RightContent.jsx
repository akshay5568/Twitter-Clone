import { CiSearch } from "react-icons/ci";

function RightContent() {
    return (
        <div className="w-full h-full pl-9 p-3">
           <div className="w-[80%]">
            <div>
                <input type="text" className="p-3 rounded-l-full rounded-r-full border-1 border-gray-600 text-white w-full text-xs" placeholder="🔍  Search"/>
            </div>

            <div className="border-1 border-gray-600 rounded-xl mt-5 p-3 pr-5">
                <div className="text-[#e7e9ea]">
                    <h1 className="font-semibold text-xl">Subscribe to Premium</h1>
                    <p className="mt-3">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="p-2 px-6 rounded-r-full rounded-l-full bg-[#1d9bf0] mt-3 font-semibold text-xs cursor-pointer">Subscribe</button>
                </div>
            </div>


            <div>

            </div>
            </div> 
        </div>
    )
}

export default RightContent;