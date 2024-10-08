import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <form className="flex flex-col bg-white p-6 md:p-8 w-full max-w-md md:border md:border-gray-200 md:shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-2xl md:text-3xl text-gray-800 mb-2">
            Forgot Password
          </h1>
          <p className="text-gray-500 text-sm">
            Enter your email address to reset your password.
          </p>
        </div>
        <div className="relative w-full mt-5 mb-6">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
          <Mail className="absolute inset-y-3 left-3 text-gray-500 pointer-events-none" />
        </div>
        {loading ? (
          <Button
            disabled
            className="w-full bg-indigo-600 text-white py-2 rounded-lg flex justify-center items-center"
          >
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors"
          >
            Send Reset Link
          </Button>
        )}
        <span className="text-center mt-4 text-sm text-gray-500">
          Back to
          <Link to="/login" className="text-indigo-600 hover:underline ml-1">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
