import NavBar from '../components/topNavBar';
import {Link}  from 'react-router-dom';

export default function LandingPage() {
    return(
        <div>
            <NavBar />
            <div className="min-h-screen flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to Verbella</h1>
        <p className="text-lg mb-8">
            Verbella is your new go-to platform for language exchange and connecting with language partners worldwide. Join us and start improving your skills today!
        </p>
        <Link
        to="/signup"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
            Create an Account
        </Link>
        </div>
    </div>
        </div>
    );

}