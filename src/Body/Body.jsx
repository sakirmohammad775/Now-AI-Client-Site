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
                <div className="grid lg:grid-cols-4">
                    <div className="h-[200px] w-[200px] bg-black">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <FaRegMessage />
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