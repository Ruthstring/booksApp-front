import { useNavigate } from "react-router-dom";
import { Home, PlusCircle, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const MobileBottomBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// Function to check if an icon should be active
	const isActive = (path) => location.pathname === path;

    return (
		<>
			{/* ✅ Bottom Navigation Bar */}
			<div className="flex md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 justify-between items-center">
				{/* Home Icon */}
				<button
					onClick={() => navigate("/home")}
					className="flex flex-col items-center gap-y-1"
				>
					<Home
						size={30}
						className={`stroke-2 ${
							isActive("/") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
						}`}
					/>
				</button>

				{/* Plus Icon (Search) */}
				<button
					onClick={() => navigate("/books")}
					className="flex flex-col items-center gap-y-1"
				>
					<PlusCircle
						size={30}
						className={`stroke-2 ${
							isActive("/books") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
						}`}
					/>
				</button>

				{/* User Icon */}
				<button
					onClick={() => navigate("/profile")}
					className="flex flex-col items-center gap-y-1"
				>
					<User
						size={30}
						className={`stroke-2 ${
							isActive("/profile") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
						}`}
					/>
				</button>
			</div>

			{/* ✅ SVG Gradient Definition (Must Be Outside the Navigation Bar) */}
			<svg width="0" height="0">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop stopColor="#3B82F6" offset="0%" />
						<stop stopColor="#EC4899" offset="100%" />
					</linearGradient>
				</defs>
			</svg>
		</>
	);

	// return (
	// 	<div className="flex md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4  justify-around transition-opacity duration-500 ease-in-out">
	// 		{/* Home Icon */}
	// 		<button
	// 			onClick={() => navigate("/home")}
	// 			className="flex flex-col items-center"
	// 		>
	// 			<Home
	// 				size={30}
	// 				className={`${
	// 					isActive("/") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
	// 				}`}
	// 			/>
	// 		</button>

	// 		{/* Plus Icon (Search New Book) */}
	// 		<button
	// 			onClick={() => navigate("/books")}
	// 			className="flex flex-col items-center"
	// 		>
	// 			<PlusCircle
	// 				size={30}
	// 				className={`stroke-[2px] fill-none ${
	// 					isActive("/search") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
	// 				}`}
	// 			/>
	// 		</button>

	// 		{/* User Icon */}
	// 		<button
	// 			onClick={() => navigate("/profile")}
	// 			className="flex flex-col items-center"
	// 		>
	// 			<User
	// 				size={30}
	// 				className={`${
	// 					isActive("/profile") ? "stroke-[url(#gradient)]" : "stroke-gray-400"
	// 				}`}
	// 			/>
	// 		</button>

	// 		{/* SVG Gradient Definition */}
	// 		<svg width="0" height="0">
	// 			<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
	// 				<stop stopColor="#3B82F6" offset="0%" /> {/* Blue */}
	// 				<stop stopColor="#EC4899" offset="100%" /> {/* Pink */}
	// 			</linearGradient>
	// 		</svg>
	// 	</div>
	// );
};

export default MobileBottomBar;
