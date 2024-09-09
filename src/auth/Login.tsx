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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={LoginSubmitHandler}
        className="bg-white p-6 md:p-8 w-full max-w-md md:border md:shadow-lg border-none shadow-none rounded-lg"
      >
        <div className="mb-6 text-center">
          <h1 className="font-bold text-3xl text-gray-800">Food House</h1>
        </div>
        <div className="relative mb-4">
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={ChangeEventHandler}
            placeholder="Enter your email"
            className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <Mail className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          {errors?.email && (
            <span className="text-sm text-red-600">{errors.email}</span>
          )}
        </div>
        <div className="relative mb-6">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={ChangeEventHandler}
            className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <LockKeyhole className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          {errors?.password && (
            <span className="text-sm text-red-600">{errors.password}</span>
          )}
        </div>
        <div className="mb-8">
          {loading ? (
            <Button
              disabled
              className="bg-indigo-600 text-white w-full py-2 rounded-md flex justify-center items-center"
            >
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-md transition-all"
            >
              Login
            </Button>
          )}
          <p className="text-center pt-4">
            <Link
              to="/forgot-password"
              className="hover:text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
        <Separator className="my-4" />
        <p className="text-center text-gray-600">
          Don't have an account?
          <Link to="/signUp" className="text-indigo-600 underline ml-2">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
