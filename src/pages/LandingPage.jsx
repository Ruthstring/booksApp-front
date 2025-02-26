import {useNavigate} from "react-router-dom";
import Button from "../components/Button"

//trial. set up purposes

const LandingPage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Book App</h1>
        <p className="text-lg text-gray-600 mt-4">Discover your next favorite book!</p>
        <Button className="mt-6" onClick={() => navigate("/login")}>
          Enter Now
        </Button>
      </div>
    );
  };
  
  export default LandingPage;