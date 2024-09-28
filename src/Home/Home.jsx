import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto ">
                <div className="w-full flex min-h-screen  duration-[1.5s]">
                    <Sidebar></Sidebar> 
                    <Body></Body>
                    <h3>add the new feature</h3>
                    <h3>add the new feature</h3>
                    <h3>add the new feature</h3>
                    <h3>add the new feature</h3>
                    <h3>add the new feature</h3>
                </div>
            </div>
        </>
    );
};

export default Home;