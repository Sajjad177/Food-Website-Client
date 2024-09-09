import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Food House</h1>
        </div>
        <div className="relative mb-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        <div className="relative">
          <Input
            type="password"
            placeholder="Enter your password"
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        <div className="mb-10 mt-5">
          {/* Login loading spinner added */}
          {loading ? (
            <Button className="bg-firstColor hover:bg-hoverColor w-full">
              <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button className="bg-firstColor hover:bg-hoverColor w-full">
              Login
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Don't Have account
          <Link to="/signUp" className="text-red-500 underline ml-2">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
