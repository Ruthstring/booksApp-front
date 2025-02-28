
import { useState } from "react";
import Navbar from "../components/Navbar";

const UserList = () => {
  // Placeholder books (No real data)
  const placeholderBooks = Array(10).fill({
    id: null,
    title: "",
    author: "",
    coverUrl: "",
    largeCoverUrl: "",
  });

  // State to track the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="min-h-screen bg-[#131315] text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Uses a 2-column layout on large screens */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-10">
        
        {/* Book List */}
        <div className="w-full space-y-4">
          <h2 className="text-lg font-semibold mb-4">My Reading List</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {placeholderBooks.map((_, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all bg-gray-800 hover:bg-gray-700 ${
                  selectedBook?.id === index ? "border border-blue-400" : ""
                }`}
                onClick={() => setSelectedBook({ id: index })}
              >
                {/* Placeholder Book Cover */}
                <div className="w-16 h-24 rounded-md bg-gray-600 animate-pulse"></div>

                {/* Placeholder Title & Author */}
                <div className="space-y-1">
                  <div className="h-4 w-24 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="h-3 w-16 bg-gray-600 rounded-md animate-pulse"></div>
                  {selectedBook?.id === index && (
                    <p className="text-blue-400 text-xs">Currently Selected</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Preview - Stays Visible While Scrolling */}
        <div className="hidden md:flex">
          <div className="w-[300px] h-[450px] bg-gray-700 rounded-lg animate-pulse sticky top-20">
            {selectedBook ? (
              <div className="w-full h-full bg-gray-600 rounded-lg animate-pulse"></div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 text-xl">
                <span>📖</span>
                <p className="mt-2 text-sm">Click a book to preview</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserList;

