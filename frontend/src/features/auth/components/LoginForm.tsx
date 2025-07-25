import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../services/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      // You can redirect the user here
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Log in</h2>

      {error && (
        <div className="text-red-600 text-sm mb-3 text-center">{error}</div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Log in
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
