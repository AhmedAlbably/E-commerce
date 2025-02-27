// // import { Link, useNavigate } from "react-router-dom";
// // import "./Login.scss";
// // import { BASE_URL, LOGIN } from "../../../Api/Api";
// // import axios from "axios";
// // import { useState } from "react";
// // import Cookie from 'cookie-universal';

// // const Login = () => {


// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //   });
    
  
// //     const cookies = Cookie();
// //     const navigate = useNavigate();
// //     const handleChange = (e) => {
// //       setForm({ ...form, [e.target.name]: e.target.value });
// //     };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post(`${BASE_URL}${LOGIN}`, form);
// //       if(res.status === 200){
// //         const token = res.data.token;
// //         cookies.set("ECT", token)
// //         navigate("/", {replace: true})
        
// //       }

// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };




// //   return (
// //     <section className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //         <h1 className="text-2xl font-bold text-center mb-6">
// //           Login to Your Account
// //         </h1>

// //         <form className="space-y-4" onSubmit={handleSubmit}>
// //           <div>
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Enter your email"
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Password</label>
// //             <div className="relative">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 name="password"
// //                 placeholder="Create a password"
// //                 onChange={formik.handleChange}
// //                 onBlur={formik.handleBlur}
// //                 value={formik.values.password}
// //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
// //                 required
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute right-3 top-3 text-blue-600"
// //                 onClick={() => setShowPassword(!showPassword)}
// //               >
// //                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// //               </button>
// //             </div>
// //             {formik.touched.password && formik.errors.password && (
// //               <p className="text-red-500 text-sm">{formik.errors.password}</p>
// //             )}
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         <div className="text-center my-4">Or</div>

// //         <div className="space-y-3">
// //           <a href="http://localhost:8000/api/v1/auth/google">
// //             <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
// //               Login with Google
// //             </button>
// //           </a>
// //         </div>

// //         <p  className="text-center text-gray-600 mt-4">
// //           Don't have an account?
// //           <Link to="/signup" className="text-blue-600">
// //             Sign up
// //           </Link>
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Login;


// // ! another version of my code 

// // import { Link, useNavigate } from "react-router-dom";
// // import "./Login.scss";
// // import { BASE_URL, LOGIN } from "../../../Api/Api";
// // import axios from "axios";
// // import { useState } from "react";
// // import Cookie from "cookie-universal";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// // const Login = () => {
// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const cookies = Cookie();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post(`${BASE_URL}${LOGIN}`, form);
// //       if (res.status === 200) {
// //         const token = res.data.token;
// //         cookies.set("ECT", token);
// //         navigate("/", { replace: true });
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //         <h1 className="text-2xl font-bold text-center mb-6">
// //           Login to Your Account
// //         </h1>

// //         <form className="space-y-4" onSubmit={handleSubmit}>
// //           <div>
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Enter your email"
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Password</label>
// //             <div className="relative">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 name="password"
// //                 placeholder="Enter your password"
// //                 onChange={handleChange}
// //                 value={form.password}
// //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
// //                 required
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute right-3 top-3 text-blue-600"
// //                 onClick={() => setShowPassword(!showPassword)}
// //               >
// //                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// //               </button>
// //             </div>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         <div className="text-center my-4">Or</div>

// //         <div className="space-y-3">
// //           <a href="http://localhost:8000/api/v1/auth/google">
// //             <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
// //               Login with Google
// //             </button>
// //           </a>
// //         </div>

// //         <p className="text-center text-gray-600 mt-4">
// //           Don't have an account?{" "}
// //           <Link to="/signup" className="text-blue-600">
// //             Sign up
// //           </Link>
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Login;


// // * I think this will be the last version 

// import { Link, useNavigate } from "react-router-dom";
// import "./Login.scss";
// import { BASE_URL, LOGIN } from "../../../Api/Api";
// import axios from "axios";
// import { useState } from "react";
// import Cookie from "cookie-universal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const cookies = Cookie();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}${LOGIN}`, form);
//       if (res.status === 200) {
//         const token = res.data.token;
//         cookies.set("ECT", token);
//         navigate("/", { replace: true });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Login to Your Account
//         </h1>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 onChange={handleChange}
//                 value={form.password}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-3 text-blue-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </button>
//             </div>
//             <div className="text-right mt-2">
//               <Link to="/forgot-password" className="text-blue-600 text-sm">
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-center my-4">Or</div>

//         <div className="space-y-3">
//           <a href="http://localhost:8000/api/v1/auth/google">
//             <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//               Login with Google
//             </button>
//           </a>
//         </div>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?
//           <Link to="/signup" className="text-blue-600">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;


const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
          <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 text-sm">
          <label className="flex items-center mb-2 sm:mb-0">
            <input type="checkbox" className="mr-2" /> Remember Me
          </label>
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm sm:text-base">
          Sign In
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-blue-500">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

