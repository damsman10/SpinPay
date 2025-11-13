import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "/vite.svg"; // replace with your actual logo file

export default function Login() {
  return (
    <div className="flex flex-col items-center pt-20 px-2 min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100">
      {/* Logo and Branding */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <img
            src={logo}
            alt="SpinPay Logo"
            className="w-12 h-12 mr-2 drop-shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow">
            SpinPay
          </h1>
        </div>
        <p className="text-sm text-white/90 italic font-medium tracking-wide">
          Spin. Win. Get Paid.
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-sm bg-white/95 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Log in to your account
        </h2>

        <form className="space-y-4">
          <Input label="Phone Number" placeholder="Enter your phone number" type="tel" />
          <Input label="Password" type="password" placeholder="Enter your password" />

          <Button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold hover:opacity-90 transition">
            Login
          </Button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#b8a40d] hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
