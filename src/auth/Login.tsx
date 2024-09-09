import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/Schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginInputState>>({});

  const ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const LoginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }

    console.log(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={LoginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Food House</h1>
        </div>
        <div className="relative mb-3">
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={ChangeEventHandler}
            placeholder="Enter your email"
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && (
            <span className="text-sm text-red-600">{errors.email}</span>
          )}
        </div>
        <div className="relative">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={ChangeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && (
            <span className="text-sm text-red-600">{errors.password}</span>
          )}
        </div>
        <div className="mb-10 mt-5">
          {/* Login loading spinner added */}
          {loading ? (
            <Button
              disabled
              className="bg-firstColor hover:bg-hoverColor w-full"
            >
              <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-firstColor hover:bg-hoverColor w-full"
            >
              Login
            </Button>
          )}
          <p className="text-center pt-3">
            <Link to="/forgot-password" className="hover:text-red-500 hover:underline">Forgot Password</Link>
          </p>
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
