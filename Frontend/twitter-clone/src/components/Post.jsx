import { NavLink } from "react-router-dom";


function Post () {
    return (
        <div className="w-full h-fit p-2 border-t-1 border-gray-800">
            <div className="flex text-white gap-3 p-3">
                <div className="w-[10%]">
                    <NavLink><img className="w-[3vw] h-[3vw] rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></NavLink>
                </div>

                <div className="w-[90%]">
                    <form action="" className="">
                        <textarea name="" className="border-b-1 border-b-gray-600 w-full text-xl outline-none" placeholder="What's happening?" id=""></textarea><br />
                        <input className="" type="file" name="Image" placeholder="Image" id=""/>
                        <button className="px-3 p-1 bg-white rounded-full text-black  font-semibold">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Post;