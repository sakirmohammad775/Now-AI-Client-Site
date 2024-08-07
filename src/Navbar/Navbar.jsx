import image from "../assets/Untitled design.png"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <p>Gemini</p>
                <img src={image} className="h-10 w-10 rounded-full" alt="Gemini" />
            </div>

        </>
    );
};

export default Navbar;