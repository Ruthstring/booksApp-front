import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";



const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="hidden sm:flex justify-between p-4 bg-gray-900 text-white w-full transition-opacity duration-500 ease-in-out">
      <h1 className="text-xl font-bold">BookApp</h1>
      <ul className="flex gap-6">
        <li onClick={() => navigate("/home")} className="cursor-pointer hover:text-blue-400">
          Home
        </li>
        <li onClick={() => navigate("/books")} className="cursor-pointer hover:text-blue-400">
          Books
        </li>
        <li onClick={() => navigate("/profile")} className="cursor-pointer hover:text-blue-400">
          Profile
        </li>
      </ul>
       {/* ✅ Search Bar */}
       <SearchBar className="hidden sm:flex" />
    </nav>
  );
  };
  
  export default Navbar;