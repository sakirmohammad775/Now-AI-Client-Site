import { FaRegClock, FaRegLightbulb, FaRegMessage } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import { HiCodeBracket } from "react-icons/hi2";


const Body = () => {
    return (
        <><div className="w-full">
            <Navbar></Navbar>
            <div className="">
                <div>
                    <p>Hello, Dev.</p>
                    <p>How can I help you today?</p>
                </div>
                {/* card */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    <div className="h-[200px] w-[200px] bg-gray-200 rounded-xl ">
                        <p className="text-gray-800 text-[20px] p-4"> Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegMessage className="mt-10 ml-32 fo" />
                    </div>
                    <div>
                        <FaRegClock />
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                    </div>
                    <div>
                        <FaRegLightbulb />
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                    </div>
                    <div>
                        <HiCodeBracket />
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Body;