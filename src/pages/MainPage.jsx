import Navbar from "../components/Navbar";
import BookFeature from "../components/BookFeature";
import GenreSlider from "../components/GenreSlider";

const MainPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <BookFeature />
      <GenreSlider />
    </div>
  );
};

export default MainPage;