import { Link } from "react-router-dom";

const topNavBar = () => {
    return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Verbella</div>
        <div className="space-x-4">
        <Link to="/login" className="hover:underline">
            Log In
        </Link>
        <Link to="/signup" className="hover:underline">
            Sign Up
        </Link>
        </div>
    </nav>
    );
};

export default topNavBar;
