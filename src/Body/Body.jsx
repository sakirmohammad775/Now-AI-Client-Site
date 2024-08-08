import { FaRegClock, FaRegLightbulb, FaRegMessage } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import { HiCodeBracket } from "react-icons/hi2";
import { ImFilePicture } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../Context/Context";


const Body = () => {
    const {prevPrompts,setPrevPrompts,onSent,recentPrompt,setRecentPrompt,showResult,loading,resultData,input,setInput}=useContext(Context)

    return (
        <><div className="w-full">
            <Navbar></Navbar>
            {/* middle part */}

            <div className=" max-w-screen-lg mx-auto pl-10 mt-28">
                {!showResult?<>
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
                        <HiCodeBracket className="mt-10 ml-40 text-2xl" />
                    </div>



                </div>
                </>
            :
            <>
            <div>hello</div>
            </>    
            }
                
            </div>

            {/* bottom part */}
            <div className="max-w-screen-lg mx-auto mt-24 text-center relative">
                <div className="relative w-[90%] mx-auto">
                    <input 
                    onChange={(e)=>setInput(e.target.value)}value={input}
                        type="text"
                        placeholder="Enter a Prompt Here"
                        className="input input-bordered w-full rounded-[42px] pl-12 pr-12"
                    />
                    <div className="absolute top-1/2 right-20 transform -translate-y-1/2 text-2xl text-gray-500">
                        <ImFilePicture />
                    </div>
                    <div className="absolute top-1/2 right-12 transform -translate-y-1/2 text-2xl text-gray-500">
                        <MdKeyboardVoice />
                    </div>
                    <div  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-gray-500">
                    <IoMdSend onClick={()=>onSent()}/>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto text-center ">

                <p className="text-gray-600 mt-3">NowAI may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
        </>
    );
};

export default Body;