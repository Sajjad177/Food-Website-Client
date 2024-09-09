import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <form className="flex flex-col bg-white p-6 md:p-8 w-full max-w-md rounded-lg md:border md:border-gray-200 md:shadow-lg">
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-2xl md:text-3xl text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-gray-500 text-sm">
            Enter your new password to reset it
          </p>
        </div>
        <div className="relative w-full mt-5 mb-6">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            className="pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
          <Lock className="absolute inset-y-3 left-3 text-gray-500 pointer-events-none" />
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
            Reset
          </Button>
        )}

        <span className="text-center mt-4 text-sm text-gray-500">
          Back to{" "}
          <Link to="/login" className="text-indigo-600 hover:underline ml-1">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ResetPassword;
