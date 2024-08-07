import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex">
                    <Sidebar></Sidebar> 
                    <Body></Body>
                </div>
            </div>
        </>
    );
};

export default Home;