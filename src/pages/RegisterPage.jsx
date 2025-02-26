import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Register</h2>
      <input className="mt-4 p-2 border rounded w-80" type="text" placeholder="Full Name" />
      <input className="mt-2 p-2 border rounded w-80" type="email" placeholder="Email" />
      <input className="mt-2 p-2 border rounded w-80" type="password" placeholder="Password" />
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Create Account
      </button>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;