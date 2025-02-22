import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { BASE_URL, LOGIN } from "../../../Api/Api";
import axios from "axios";
import { useState } from "react";
import Cookie from 'cookie-universal';

const Login = () => {


  const [form, setForm] = useState({
    email: "",
    password: "",
  });
    
  
    const cookies = Cookie();
    const navigate = useNavigate();
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}${LOGIN}`, form);
      if(res.status === 200){
        const token = res.data.token;
        cookies.set("ECT", token)
        navigate("/", {replace: true})
        
      }

    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4">Or</div>

        <div className="space-y-3">
          <a href="http://localhost:8000/api/v1/auth/google">
            <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
              Login with Google
            </button>
          </a>
        </div>

        <p  className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
