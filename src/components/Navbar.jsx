import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../index.css"




const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current route

  // Function to check if a menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="hidden sm:flex items-center justify-between p-4 bg-gray-900 text-white w-full rounded-lg shadow-md">
        
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="BookApp Logo" className="h-10 w-10" />
        </div>

        <div className="flex items-center gap-10">
        {/* ✅ Navigation Links */}
        <ul className="flex gap-6">
          <li
            onClick={() => navigate("/")}
            className={`search-text cursor-pointer hover:text-blue-400 transition ${
              isActive("/") ? "hidden" : "flex"
            }`}
          >
             Home
          </li>
          <li
            onClick={() => navigate("/books")}
            className={`search-text cursor-pointer hover:text-blue-400 transition ${
              isActive("/search") ? "hidden" : ""
            }`}
          >
            AI BookFinder
          </li>
          <li
            onClick={() => navigate("/profile")}
            className={`search-text cursor-pointer hover:text-blue-400 transition ${
              isActive("/profile") ? "hidden" : ""
            }`}
          >
            MyBooks
          </li>
        </ul>

        {/* ✅ Search Bar with Gradient Border */}
        <div className="relative flex items-center">
          <SearchBar />
          
        </div>

        {/* ✅ Profile Letter Avatar with Gradient Stroke */}
        <div className="search-text relative flex items-center justify-center h-10 w-10 text-lg font-bold text-white bg-gray-900 rounded-full">
          M {/* Replace with dynamic user initial */}
          <svg className="absolute w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              stroke="url(#gradient)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        </div>
        
      </nav>

      {/* ✅ SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#3B82F6" offset="0%" /> {/* Blue */}
            <stop stopColor="#EC4899" offset="100%" /> {/* Pink */}
          </linearGradient>
        </defs>
      </svg>
    </>
  );


  };
  
  export default Navbar;