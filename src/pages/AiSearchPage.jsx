import Navbar from "../components/Navbar";
import Button from "../components/Button";
import MobileBottomBar from "../components/MobileBottomBar";
import { useState } from "react";

const genres = ["Romance", "Fantasy", "Sci-Fi", "Thriller", "Horror", "Mystery"];
const moods = ["😊", "😎", "🤔", "😢", "😡", "😂"];

const AiSearchPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen bg-[#1a0e0e] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Genre Selection */}
        <h2 className="text-lg font-semibold mb-4">Select a genre</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <div
              key={genre}
              className={`relative bg-gray-800 p-4 rounded-lg cursor-pointer transition-all ${
                selectedGenre === genre ? "border-2 border-blue-400" : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              <img
                src="https://via.placeholder.com/150"
                alt={genre}
                className="rounded-md w-full h-auto"
              />
              <p className="text-center mt-2">{genre}</p>
              {selectedGenre === genre && (
                <div className="absolute top-2 right-2 text-blue-400 text-2xl">✔</div>
              )}
            </div>
          ))}
        </div>

        {/* Mood Selection */}
        {/* <h2 className="text-lg font-semibold mt-8 mb-4">Select a mood</h2>
        <div className="flex gap-4 justify-center">
          {moods.map((mood, index) => (
            <div
              key={index}
              className={`p-4 bg-gray-800 rounded-full text-2xl cursor-pointer transition-all ${
                selectedMood === mood ? "border-2 border-blue-400" : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </div>
          ))}
        </div> */}
        <h2 className="text-lg font-semibold mt-8 mb-4">Select a mood</h2>
<div className="flex gap-4 overflow-x-auto scrollbar-hide md:justify-center no-scrollbar">
  {moods.map((mood, index) => (
    <div
      key={index}
      className={`p-4 bg-gray-800 rounded-full text-2xl cursor-pointer transition-all shrink-0 w-[60px] h-[60px] flex items-center justify-center ${
        selectedMood === mood ? "border-2 border-blue-400" : "hover:bg-gray-700"
      }`}
      onClick={() => setSelectedMood(mood)}
    >
      {mood}
    </div>
  ))}
</div>

        {/* Next Button */}
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-md hover:opacity-80 transition">
            Next
          </Button>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <MobileBottomBar className="sm:hidden h-[10vh] flex-shrink-0" />
    </div>
  );
};

export default AiSearchPage;