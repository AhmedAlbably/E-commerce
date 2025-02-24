// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL, SIGNUP } from "../../../Api/Api";
// import Cookie from "cookie-universal";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // const cookies = Cookie();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}${SIGNUP}`, form);
//       if(res.status === 201){
//         navigate("/login", {replace: true})
        
//       }
//       // const token = res.data.token;
//       // cookies.set("ECT", token)

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Create a New Account
//         </h1>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               onChange={handleChange}
//               value={form.name}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               value={form.email}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create a password"
//               onChange={handleChange}
//               value={form.password}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Create a password"
//               onChange={handleChange}
//               value={form.confirmPassword}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="text-center my-4">Or</div>

//         <div className="space-y-3">
//         <a href="http://localhost:8000/api/v1/auth/google">
//             <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//               Login with Google
//             </button>
//           </a>
//         </div>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="#" className="text-blue-600">
//             Log in
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Signup;

// // ! another version of my code

// // import { useState } from "react";
// // import axios from "axios";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import { BASE_URL, REGISTER } from "../../../Api/Api";

// // const Register = () => {
// //   const formik = useFormik({
// //     initialValues: {
// //       name: "",
// //       email: "",
// //       password: "",
// //       passwordConfirm: "",
// //     },
// //     validationSchema: Yup.object({
// //       name: Yup.string()
// //         .min(3, "Name must be at least 3 characters")
// //         .required("Full name is required"),
// //       email: Yup.string()
// //         .email("Invalid email address")
// //         .required("Email is required"),
// //       password: Yup.string()
// //         .min(6, "Password must be at least 6 characters")
// //         .required("Password is required"),
// //       passwordConfirm: Yup.string()
// //         .oneOf([Yup.ref("password"), null], "Passwords must match")
// //         .required("Confirm password is required"),
// //     }),
// //     onSubmit: async (values) => {
// //       try {
// //         const res = await axios.post(`${BASE_URL}${REGISTER}`, values);
// //         console.log(res.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     },
// //   });

// //   return (
// //     <section className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //         <h1 className="text-2xl font-bold text-center mb-6">Create a New Account</h1>

// //         <form className="space-y-4" onSubmit={formik.handleSubmit}>
// //           <div>
// //             <label className="block text-gray-700">Full Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Enter your full name"
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               value={formik.values.name}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //             {formik.touched.name && formik.errors.name ? (
// //               <p className="text-red-500 text-sm">{formik.errors.name}</p>
// //             ) : null}
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Enter your email"
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               value={formik.values.email}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //             {formik.touched.email && formik.errors.email ? (
// //               <p className="text-red-500 text-sm">{formik.errors.email}</p>
// //             ) : null}
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Create a password"
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               value={formik.values.password}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //             {formik.touched.password && formik.errors.password ? (
// //               <p className="text-red-500 text-sm">{formik.errors.password}</p>
// //             ) : null}
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Confirm Password</label>
// //             <input
// //               type="password"
// //               name="passwordConfirm"
// //               placeholder="Confirm your password"
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               value={formik.values.passwordConfirm}
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //             {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
// //               <p className="text-red-500 text-sm">{formik.errors.passwordConfirm}</p>
// //             ) : null}
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// //           >
// //             Sign Up
// //           </button>
// //         </form>

// //         <div className="text-center my-4">Or</div>

// //         <div className="space-y-3">
// //           <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
// //             Sign Up with Google
// //           </button>
// //         </div>

// //         <p className="text-center text-gray-600 mt-4">
// //           Already have an account? <a href="#" className="text-blue-600">Log in</a>
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Register;



// ! new version of my code 

import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BASE_URL, SIGNUP } from "../../../Api/Api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .matches(/@gmail\.com$/, "Email must be a Gmail address (example@gmail.com)")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .required("Password is required"), // <- You forgot this
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${BASE_URL}${SIGNUP}`, values);
        if (res.status === 201) {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create a New Account
        </h1>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-blue-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-blue-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
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

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;


