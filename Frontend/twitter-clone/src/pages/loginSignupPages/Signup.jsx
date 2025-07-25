import logo from '..//../assets/logo.jpg';



function Signup () {
    return (
        <div className='w-full h-full bg-[#242d35] flex justify-center items-center text-white'>
            <div className='w-[40%] h-[80%] bg-black rounded-xl px-20'>
                 <img className='w-[50px] m-auto mt-3' src={logo} alt="" />
                 <h1 className='text-2xl mt-7' >Create your account</h1>
                 <div>
                    <form action="" className='m-auto mt-5'>
                        <input type="text" className='w-full p-5 border-1 border-gray-700 rounded text-xl' placeholder='Name'/><br />
                        <input type="email" className='w-full p-5 mt-6 border-1  border-gray-700 rounded text-xl' placeholder='Email'/>
                        <input type="password" className='w-full p-5 mt-6 border-1  border-gray-700 rounded text-xl' placeholder='Password'/>
                        <div className='mt-5'><h4 className='font-semibold'>Date of birth</h4><p className='text-gray-600 text-xs mt-2'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p></div>
                        <input type="date" className='w-full mt-6 p-5 text-xl border-1  border-gray-700 rounded'  />
                        <button className='w-full bg-white p-3 rounded-full mt-15 text-black font-semibold'>Next</button>
                    </form>
                 </div>
            </div>
        </div>
    )
}


export default Signup;