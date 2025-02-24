// import { useState } from "react";
// import {
//   FaFilter,
//   FaTimes,
//   FaTag,
//   FaTshirt,
//   FaMobileAlt,
//   FaLaptop,
//   FaArrowRight,
// } from "react-icons/fa";
// import "./Aside.css";

// const AsideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isFading, setIsFading] = useState(false);

//   // Smooth Close
//   const closeSidebar = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsFading(false);
//     }, 300);
//   };

//   return (
//     <aside className="relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:w-80 z-50`}
//       >
//         {/* Close Button (X) */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-bold text-gray-800">Categories</h2>
//           <button
//             className="text-gray-600 text-2xl hover:text-red-500 transition"
//             onClick={closeSidebar}
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* Scrollable Content */}
//         <div className="h-full flex flex-col">
//           <ul className="flex-1 overflow-y-auto p-4 space-y-4 text-gray-700 custom-scrollbar">
//             <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
//               <FaTshirt /> Fashion
//             </li>
//             <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
//               <FaMobileAlt /> Mobile Phones
//             </li>
//             <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
//               <FaLaptop /> Laptops
//             </li>
//             <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
//               <FaTag /> Deals & Offers
//             </li>
//           </ul>

//           {/* Footer */}
//           <div className="p-4 border-t text-center text-gray-600">
//             © 2025 YourStore
//           </div>
//         </div>
//       </div>

//       {/* Open Sidebar Button (Arrow) */}
//       {!isOpen && (
//         <button
//           className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg transition hover:bg-blue-700 z-50"
//           onClick={() => setIsOpen(true)}
//         >
//           <FaArrowRight />
//         </button>
//       )}

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//             isFading ? "opacity-0" : "opacity-100"
//           } md:hidden z-40`}
//           onClick={closeSidebar}
//         ></div>
//       )}
//     </aside>
//   );
// };

// export default AsideMenu;



// ! another version of my code 

import { useState } from "react";
import {
  FaFilter,
  FaTimes,
  FaTag,
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaArrowRight,
} from "react-icons/fa";
import "./Aside.css"; // For scrollbar styles

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Smooth Close
  const closeSidebar = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsFading(false);
    }, 300);
  };

  return (
    <aside className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-80 z-50`}
      >
        {/* Close Button (X) */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Categories</h2>
          <button
            className="text-gray-600 text-2xl hover:text-red-500 transition"
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto p-4 space-y-4 text-gray-700 custom-scrollbar">
          <ul>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <FaTshirt /> Fashion
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <FaMobileAlt /> Mobile Phones
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <FaLaptop /> Laptops
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <FaTag /> Deals & Offers
            </li>
            {/* Extra Categories for Scroll Test */}
            {Array(20)
              .fill("More Categories")
              .map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition"
                >
                  🔥 {item} {index + 1}
                </li>
              ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="p-4 border-t text-center text-gray-600">
          © 2025 YourStore
        </div>
      </div>

      {/* Open Sidebar Button (Arrow) */}
      {!isOpen && (
        <button
          className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg transition hover:bg-blue-700 z-50"
          onClick={() => setIsOpen(true)}
        >
          <FaArrowRight />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          } md:hidden z-40`}
          onClick={closeSidebar}
        ></div>
      )}
    </aside>
  );
};

export default Aside;

