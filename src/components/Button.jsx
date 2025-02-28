const Button = ({ children, onClick, className = "" }) => {
	return (
		<div className="relative flex items-center justify-center">
			{/* 🔵 Left Blur Circle */}
			<div className="absolute -top-1 -bottom-5 -left-5 w-10 h-10 bg-blue-400 opacity-100 blur-2xl"></div>

			{/* 🟣 Right Blur Circle */}
			<div className="absolute -top-1 -bottom-5 -right-5 w-10 h-10 bg-purple-500 opacity-100 blur-2xl"></div>

			{/* ✨ Gradient Border Button */}
			<button
				onClick={onClick}
				className={`relative px-8 py-3 font-medium rounded-full 
					text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500
        bg-transparent border-2
        before:absolute before:inset-0 before:rounded-full before:p-[2px] 
        before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 
        before:content-[''] before:-z-10 
        before:border-transparent before:outline-gradient
        hover:before:opacity-80 transition-all duration-300
        ${className}`}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
