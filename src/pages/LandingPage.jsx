import {useNavigate} from "react-router-dom";
import Button from "../components/Button"


const LandingPage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="min-h-screen w-full flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden">
        {/* Placeholder for Image/Design */}
        <div className="w-full md:w-1/2 h-1/3 md:h-full flex items-center justify-center bg-gray-300">
          Place for image
        </div>
  
        {/* Text & Button Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-6 md:p-12">
          <h1 className="text-8xl font-bold text-blue-600">Books</h1>
          <p className="text-lg text-gray-600 mt-4">Rise above the ordinary!</p>
          <Button className="mt-6" onClick={() => navigate("/login")}>
            Enter Now
          </Button>
        </div>
      </div>
    );
  };
  
  export default LandingPage;