import { FaRegClock, FaRegLightbulb, FaRegMessage } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import { HiCodeBracket } from "react-icons/hi2";


const Body = () => {
    return (
        <><div className="w-full">
            <Navbar></Navbar>
            <div className=" max-w-screen-lg mx-auto pl-10 mt-28">
                <div>
                    <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-900 ">HelloDev.</p>
                    <p className="text-7xl text-gray-400 ">How can I help you today?</p>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 mt-20">
                    <div className="h-[200px] w-[200px] bg-gray-200 rounded-xl hover:bg-slate-200 ">
                        <p className="text-gray-800 text-[20px] p-4"> Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegMessage className="mt-10 ml-40 text-2xl" />
                    </div>
                    <div className="h-[200px] w-[200px] bg-gray-200 rounded-xl hover:bg-slate-200 ">
                        <p className="text-gray-800 text-[20px] p-4"> Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegClock className="mt-10 ml-40 text-2xl" />
                    </div>
                    <div className="h-[200px] w-[200px] bg-gray-200 rounded-xl hover:bg-slate-200 ">
                        <p className="text-gray-800 text-[20px] p-4"> Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegLightbulb className="mt-10 ml-40 text-2xl" />
                    </div>
                    <div className="h-[200px] w-[200px] bg-gray-200 rounded-xl hover:bg-slate-200">
                        <p className="text-gray-800 text-[20px] p-4"> Suggest beautiful places to see on an upcoming road trip</p>
                        <HiCodeBracket  className="mt-10 ml-40 text-2xl" />
                    </div>
                   
                    
                    
                </div>
            </div>

            {/* bottom part */}
            <div className="max-w-screen-lg mx-auto mt-24  text-center  ">
            <input type="text" placeholder="Type here" className="input input-bordered w-[90%] rounded-[42px] " />
            <p className="text-gray-600 mt-3">NowAI may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
        </>
    );
};

export default Body;