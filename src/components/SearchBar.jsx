import { Search } from "lucide-react";
import "../index.css"

const SearchBar = ({ placeholder = "Search for books..." }) => {
  return (
    <div className="search-container">
      {/* ✅ Search Input */}
      <input type="text" placeholder={placeholder} className="search-input" />

      {/* ✅ Search Icon */}
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;


// import { Search } from "lucide-react";

// const SearchBar = ({ placeholder = "Search for books...", className = "" }) => {
//   return (
//     <div className={`relative flex items-center ${className}`}>
//       {/* Search Icon */}
//       <Search className="absolute left-3 text-gray-400" size={20} />

//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="w-full md:w-64 lg:w-80 p-2 pl-10 pr-4 border border-gray-600 rounded-full bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//       />
//     </div>
//   );
// };

// export default SearchBar;
