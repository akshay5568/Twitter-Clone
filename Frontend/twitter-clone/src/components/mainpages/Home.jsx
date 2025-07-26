import Navbar from "../Navbar";
function Home () {
    return (
        <div className="w-full h-full bg-black text-white flex">

            <div className="w-[25%] bg-black pl-30 p-3 pr-5">
                  <Navbar/>
            </div>



            <div className="w-[40%] bg-teal-300">

            </div>

            <div className="w-[35%] bg-amber-200">

            </div>

        </div>
    )
}

export default Home;