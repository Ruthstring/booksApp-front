import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import AiSearchPage from "../pages/AiSearchPage";
import BookRecommendationPage from "../pages/BookRecommendationPage";


const AppRoutes = () => {
	return (
		// <Router>
		// 	<Routes>
		// 		<Route path="/" element={<LandingPage />} />
		// 		<Route path="/login" element={<LoginPage />} />
		// 		<Route path="/register" element={<RegisterPage />} />
		// 		<Route path="/main" element={<MainPage />} />
		// 	</Routes>
		// </Router>
		<Router>
			<Routes>
				
				<Route path="/" element={<MainPage />} />
				<Route path="/search" element={<AiSearchPage/>} />
				<Route path="/rec" element={<BookRecommendationPage/>}/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;