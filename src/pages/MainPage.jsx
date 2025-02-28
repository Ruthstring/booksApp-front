import Navbar from "../components/Navbar";
import BookFeature from "../components/BookFeature";
import GenreSlider from "../components/GenreSlider";
import MobileBottomBar from "../components/MobileBottomBar";




const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* ✅ Navbar (Fixed Height) */}
      <Navbar className="h-[15vh] flex-shrink-0 hidden sm:flex" />

      {/* ✅ Main Content (Properly Fills Screen Without Scrolling) */}
      <div className="flex-1 flex flex-col">
        {/* 🏆 BookFeature - Takes 70% of Available Space */}
        <BookFeature className="h-[55vh] flex-grow" />

        {/* 🎠 GenreSlider - Takes 20% of Available Space */}
        <GenreSlider className="h-[25vh] flex-shrink-0" />
      </div>

      {/* ✅ Mobile Bottom Bar - Visible Only on Mobile */}
      <MobileBottomBar className="sm:hidden h-[10vh] flex-shrink-0" />
    </div>
  );
};

export default MainPage;