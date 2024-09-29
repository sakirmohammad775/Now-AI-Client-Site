import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto ">
                <div className="w-full flex min-h-screen  duration-[1.5s]">
                    <Sidebar></Sidebar> 
                    <Body></Body>
                    <div>
                        <h3>
                            NOWAI
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;