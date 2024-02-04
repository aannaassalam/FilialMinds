import kid from "../assets/kid.jpg";
import googleicon from "../assets/googleicon.png";

function Login(){
    return(
        <div className="w-[70%] mx-auto h-[90vh] bg-[#E6E6FA] flex items-start rounded-2xl  mt-[2%] translate-y-[-2%]">
            <div className="relative w-1/2 h-screen flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-4xl text-purple-700 font-bold my-4"> <span className="text-[#0000FF]"></span></h1>
                    <p className="text-xl text-orange-500 font-semibold"><span className="text-[#0000FF] "></span></p>
                </div>
                <img src={kid} className="w-full h-[90vh] rounded-2xl overflow-hidden object-cover" alt="picture" />
            </div>
            <div className="w-1/2 h-full bg-[] flex flex-col  p-20 justify-between">
            <h1 className="text-base text-[#060606] font-semibold ">GrowthWiz logo</h1>
            <div className="w-full flex flex-col max-w-[300px]">
                <h2 className="text-3x1 font- font-semibold mb-4 ">Login</h2>
                <p className="text-base mb-2">Welcome to <span className="text-[#664DD4]">GrowthWiz! </span> Please enter your details</p>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="email">Email</label>
                <input className="w-full text-black px-2 py-2 my-2 border-b border-black outline-none focus:outline-none cursor-pointer rounded-md " type="email" placeholder="Enter your email" id="email" />
                <label htmlFor="password">Password</label>
                <input className="w-full text-black px-2 py-2 my-2 border-b border-black outline-none focus:outline-none cursor-pointer rounded-md" type="password" placeholder="Enter your password" id="password" />
                
            </div>
            <div className="w-full flex items-center justify-between ">
                <div className="wfull flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm">Remember me</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap underline underline-offset-2  cursor-pointer">Forgot Password</p>
            </div>
            <div className=" w-full flex flex-col my-4 ">
                    <button className="w-full text-white my-2 bg-[#664DD4] font-bold rounded-md p-4 text-center items-center justify-center hover:border-2 hover:border-[#664DD4] hover:text-[#664DD4] hover:bg-white  ">
                        Login
                    </button>
                    {/* <button className="w-full text-[#060606] my-2 bg-white border-2 font-semibold border-black rounded-md p-4 text-center items-center justify-center">
                        Register
                    </button> */}
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px]"></div>
            <p className=" text-md absolute text-black  ">OR</p>

            </div>
            <div className="w-full">
                <p className="text-sm font-normal text-[#060606] mt-2">Dont have an account? <span className="font-semibold underline underline-offset-2">Sign up for free</span></p>
            </div>
            <button className="w-full text-[#060606] my-3 bg-white border-2 font-semibold border-black rounded-md p-2 text-center items-center justify-center text-md">
                <img src={googleicon} className="inline w-10 mx-auto h-5 pr-3" alt="" />
                        Sign In with Google
                    </button>


            </div>
        </div>
        
        
    );

}

export default Login;
