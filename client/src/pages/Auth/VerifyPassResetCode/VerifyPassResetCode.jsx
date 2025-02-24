// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL, VERIFY_RESET_CODE } from "../../../Api/Api";
// import axios from "axios";

// const VerifyPassResetCode = () => {
//   const [resetCode, setResetCode] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}${VERIFY_RESET_CODE}`, { resetCode });
//       if (res.status === 200) {
//         console.log(res.data)
//         // navigate("/verify-reset-code", { replace: true });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-gray-100">
//       <section className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold text-center text-blue-600">
//           Find Your Account
//         </h1>
//         <p className="text-gray-600 text-center mt-2">
//           Enter your email or phone number to search for your account.
//         </p>

//         <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Email or Phone Number
//             </label>
//             <input
//               type="text"
//               placeholder="Enter reset code"
//               value={resetCode}
//               onChange={(e) => setResetCode(e.target.value)}
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex justify-between">
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
//             >
//               Cancel
//             </Link>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default VerifyPassResetCode;

// ! new version of my code

import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  FORGOT_PASSWORD,
  VERIFY_RESET_CODE,
} from "./../../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { saveResetCode } from "../../../Redux/Features/resetDataPassSlice/resetDataPassSlice";

const VerifyResetCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.resetDataPass);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);

      newCode.forEach((val, i) => {
        if (inputsRef.current[i]) inputsRef.current[i].value = val;
      });

      inputsRef.current[5]?.focus();
    }
  };

  const handleResendCode = async () => {
    try {
      const res = await axios.post(`${BASE_URL}${FORGOT_PASSWORD}`, { email });
      if (res.status === 200) {
        console.log(res.data);
        setTimer(120);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    if (enteredCode.length === 6) {
      try {
        const res = await axios.post(`${BASE_URL}${VERIFY_RESET_CODE}`, {
          resetCode: enteredCode,
        });
        if (res.status === 200) {
          console.log(res.data);
          dispatch(saveResetCode(enteredCode));
          navigate("/reset-password", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Verify Reset Code
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter the 6-digit code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center gap-2">
            {code.map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={code[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-3 rounded-lg transition ${
              code.join("").length !== 6
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
            disabled={code.join("").length !== 6}
          >
            Verify Code
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {timer > 0 ? (
            <span className="text-red-500">Resend Code in {formatTime(timer)}</span>
          ) : (
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Resend Code
            </button>
          )}
        </p>
      </div>
    </section>
  );
};

export default VerifyResetCode;

