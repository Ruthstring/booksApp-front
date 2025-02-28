import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";


const BookRecommendationPage = () => {
    return (
      <div className="h-screen bg-[#131315] text-white flex flex-col">
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content - Ensures Everything Fits */}
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            
            {/* Book Cover - Adjusts to be the main focal point */}
            <div className="flex justify-center flex-[0.5] max-h-[80vh]">
              <div className="w-[min(45vw,250px)] sm:w-[min(40vw,300px)] aspect-[2/3] bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xl shadow-lg">
                📖 Book Cover
              </div>
            </div>
  
            {/* Book Info - Scales properly on mobile */}
            <div className="flex-[0.5] flex flex-col justify-between max-h-[80vh] w-full">
              {/* Title & Author */}
              <div>
                <div className="h-8 w-[min(50vw,200px)] bg-gray-700 rounded-md animate-pulse mb-2"></div>
                <div className="h-6 w-[min(40vw,150px)] bg-gray-600 rounded-md animate-pulse mb-4"></div>
              </div>
  
              {/* Description Placeholder */}
              <div className="space-y-2">
                <div className="h-5 w-[90%] bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-5 w-[85%] bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-5 w-[75%] bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-5 w-full bg-gray-700 rounded-md animate-pulse"></div>
              </div>
  
              {/* Buttons - Adjust for small screens */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="px-5 py-3 text-[clamp(14px,2vw,18px)] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:opacity-80 transition w-full sm:w-auto">
                  Add to my list
                </Button>
                <button className="px-4 py-2 border border-gray-500 rounded-lg text-gray-400 hover:bg-gray-700 transition text-[clamp(12px,1.8vw,16px)] w-full sm:w-auto">
                  Retry
                </button>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default BookRecommendationPage;



// const BookRecommendationPage = () => {
//   return (
//     <div className="h-screen bg-[#131315] text-white flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content - Ensuring Everything Fits Without Scrolling */}
//       <div className="flex-grow flex items-center justify-center px-6">
//         <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          
//           {/* Book Cover - Scales Dynamically */}
//           <div className="flex justify-center flex-[0.4] max-h-[80vh]">
//             <div className="w-full max-w-[min(30vw,250px)] aspect-[2/3] bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-2xl shadow-lg">
//               📖 Book Cover
//             </div>
//           </div>

//           {/* Book Info - Text Scales Dynamically */}
//           <div className="flex-[0.6] flex flex-col justify-between max-h-[80vh]">
//             {/* Title & Author */}
//             <div>
//               <div className="h-8 w-[min(20vw,200px)] bg-gray-700 rounded-md animate-pulse mb-2"></div>
//               <div className="h-6 w-[min(15vw,150px)] bg-gray-600 rounded-md animate-pulse mb-4"></div>
//             </div>

//             {/* Description Placeholder */}
//             <div className="space-y-2">
//               <div className="h-5 w-[90%] bg-gray-700 rounded-md animate-pulse"></div>
//               <div className="h-5 w-[85%] bg-gray-700 rounded-md animate-pulse"></div>
//               <div className="h-5 w-[75%] bg-gray-700 rounded-md animate-pulse"></div>
//               <div className="h-5 w-full bg-gray-700 rounded-md animate-pulse"></div>
//             </div>

//             {/* Buttons - Scaled Properly */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4">
//               <Button className="px-6 py-3 text-[clamp(14px,2vw,18px)] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:opacity-80 transition">
//                 Add to my list
//               </Button>
//               <button className="px-4 py-2 border border-gray-500 rounded-lg text-gray-400 hover:bg-gray-700 transition text-[clamp(12px,1.8vw,16px)]">
//                 Retry
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookRecommendationPage;



// const BookRecommendationPage = () => {
//     return (
//       <div className="min-h-screen bg-[#131315] text-white">
//         {/* Navbar */}
//         <Navbar />
  
//         {/* Content Container */}
//         <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-10">
//           {/* Book Cover Placeholder */}
//           <div className="w-full md:w-[40%]">
//             <div className="w-full aspect-[2/3] bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xl shadow-lg">
//               📖 Book Cover
//             </div>
//           </div>
  
//           {/* Book Info Placeholder */}
//           <div className="w-full md:w-[60%]">
//             <div className="h-8 w-40 bg-gray-700 rounded-md animate-pulse mb-2"></div>
//             <div className="h-6 w-32 bg-gray-600 rounded-md animate-pulse mb-4"></div>
  
//             <div className="h-5 w-64 bg-gray-700 rounded-md animate-pulse mb-2"></div>
//             <div className="h-5 w-full bg-gray-700 rounded-md animate-pulse mb-2"></div>
//             <div className="h-5 w-3/4 bg-gray-700 rounded-md animate-pulse mb-4"></div>
  
//             {/* Action Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4">
//               {/* Add to Reading List Button */}
//               <Button className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:opacity-80 transition">
//                 Add to my list
//               </Button>
  
//               {/* Retry Button */}
//               <button className="px-4 py-2 border border-gray-500 rounded-lg text-gray-400 hover:bg-gray-700 transition">
//                 Retry
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default BookRecommendationPage;
