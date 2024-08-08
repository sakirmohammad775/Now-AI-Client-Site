import image from "../assets/Untitled design.png"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center m-5">
                <p className="text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-900">NowAI</p>
                <img src={image} className="h-10 w-10 rounded-full" alt="NowAI" />
            </div>

        </>
    );
};

export default Navbar;