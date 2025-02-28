

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css"

const genres = ["Fantasy", "Sci-Fi", "Mystery", "Romance", "Thriller", "Horror", "Historical", "Non-fiction"];

const GenreSlider = ({ className }) => {
  return (
    <div className={`w-full p-6 text-left ${className}`}>
      <h2 className="text-xl font-bold mb-4">Genres</h2>

      {/* Swiper Container */}
      <div className="relative">
        

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={15}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 3 }, // 2 slides on tablets
            1024: { slidesPerView: 4 }, // 3 slides on larger screens
          }}
          className="w-full"
        >
          {genres.map((genre, index) => (
            <SwiperSlide key={index} className=" bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
              {genre}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        {/* <div className="swiper-pagination !relative mt-6"></div> */}
        <div className="swiper-pagination !static mt-6 [&>.swiper-pagination-bullet]:bg-white [&>.swiper-pagination-bullet-active]:bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default GenreSlider;