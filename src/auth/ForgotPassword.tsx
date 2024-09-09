import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;
  return (
    <div className="flex items-center  justify-center min-h-screen w-full">
      <form className="flex flex-col border md:p-8 w-full max-w-md rounded-lg">
        <div className="text-center ">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p>Enter your email address reset password</p>
        </div>
        <div className="relative w-full mt-5 mb-2">
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        {loading ? (
          <Button disabled className="bg-firstColor hover:bg-hoverColor w-full">
            <Loader2 className="mr-4 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-firstColor hover:bg-hoverColor w-full"
          >
            Send Reset Code
          </Button>
        )}
        <span className="text-center mt-3">
          Back to{" "}
          <Link to="/login" className="text-red-500 underline ml-2">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;

//! next time is          ->      1.40 minutes
