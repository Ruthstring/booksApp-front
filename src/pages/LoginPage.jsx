import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const LoginPage = () => {
	const navigate = useNavigate();

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div className="h-full flex flex-col items-center justify-center">
				<div className="container flex flex-col items-center justify-center gap-6">
					<div className="image h-60 w-full bg-amber-500"></div>
					<div className="container flex flex-col items-center justify-center gap-2 p-3 md:p-4 lg:p-5">
						<h2 className="text-3xl font-bold">Welcome back!</h2>
						<input
							className="mt-4 p-2 border rounded w-80"
							type="text"
							placeholder="Username or Email"
						/>
						<input
							className="mt-2 p-2 border rounded w-80"
							type="password"
							placeholder="Password"
						/>
            <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12" >
						<Button >
							Login
              </Button>
					
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
