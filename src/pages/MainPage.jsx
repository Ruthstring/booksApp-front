import Navbar from "../components/Navbar";
import BookFeature from "../components/BookFeature";
import GenreSlider from "../components/GenreSlider";
import MobileBottomBar from "../components/MobileBottomBar";

const MainPage = () => {
  return (
    <div className=" min-h-screen">
      {/* ✅ Desktop Navbar (Hidden on Mobile) */}
      <div className="">
        <Navbar />
      </div>

      {/* ✅ Mobile Bottom Bar (Hidden on Desktop) */}
      <div className="flex sm:hidden fixed bottom-0 left-0 w-full">
        <MobileBottomBar />
      </div>

      {/* Main Content */}
      <BookFeature />
      <GenreSlider />
    </div>
  );
};

export default MainPage;