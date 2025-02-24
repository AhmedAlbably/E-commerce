import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, FORGOT_PASSWORD } from "../../../Api/Api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveEmail } from "../../../Redux/Features/resetDataPassSlice/resetDataPassSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${BASE_URL}${FORGOT_PASSWORD}`, { email });
      if (res.status === 200) {
        dispatch(saveEmail(email));
        navigate("/verify-reset-code", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Find Your Account
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Enter your email send it to your account.
        </p>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <Link
              to="/login"
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ForgotPassword;
