import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../services/firebase';
import {Link} from 'react-router-dom';
const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess(true);
    } catch (err: any) {
        setError(err.message);
    }
};

return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>
    <form onSubmit={handleSignup} className="space-y-4">
        <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
            id="email"
            type="email"
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
            id="password"
            type="password"
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
            Sign Up
        </button>
        </form>
        <div className="mt-4 text-center">
        <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
            </Link>
            </p>
        </div>

        {success && (
        <p className="text-green-600 text-sm mt-4 text-center">Account created successfully!</p>
        )}
        {error && (
        <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
        )}
    </div>
    );
};

export default SignupForm;
