import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { User, Key, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");

	return (
		<div className=" min-h-screen overflow-hidden  flex flex-col items-center justify-center">
			<div className="h-full flex flex-col flex-grow items-center justify-center">
				<div className="container flex flex-col items-center justify-center gap-6">
					<div className="image h-60 w-full bg-amber-500"></div>
					{/* Login Box */}
					<div className="container flex flex-col items-center justify-center gap-2 p-3 md:p-4 lg:p-5">
						<h2 className=" text-3xl text-center w-full font-bold">
							Welcome back!
						</h2>
						{/* Username Field */}
						<div className="mt-4">
							<p> Username</p>
							<div className="relative w-80">
								<User
									className="absolute left-3 top-3/5 -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
									className="pl-10 mt-2 p-2 border rounded w-80"
									type="text"
									placeholder="Username"
								/>
							</div>
						</div>
						{/* Password Field */}
						<div className="mt-2">
							<p> Password</p>
							<div className="relative w-80">
								<Key
									className="absolute left-3 top-3/5 -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
								value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="pl-10 mt-2 p-2 border rounded w-80"
									type={showPassword ? "text" : "password"}
									placeholder="Password"
								/>
								<button
									type="button"
									className="absolute right-3 top-3/5 -translate-y-1/2 text-gray-400"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>

						{/* Login Button */}
						<div className="flex flex-col items-center justify-center mt-2 p-4 md:p-8 lg:p-12">
							<Button>Login</Button>

							<p className="mt-4 text-sm">
								Don't have an account?{" "}
								<span
									className="text-blue-600 cursor-pointer"
									onClick={() => navigate("/register")}
								>
									Register here
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
