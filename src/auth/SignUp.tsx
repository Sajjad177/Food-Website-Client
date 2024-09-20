import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignUpInputState, userSignUpSchema } from "@/Schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail, PhoneCallIcon, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState<SignUpInputState>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpInputState>>({});
  const { signUp, loading } = useUserStore();
  const navigate = useNavigate();

  const ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const SignUpSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    //Form validation checking ->
    const result = userSignUpSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignUpInputState>);
      return;
    }
    //TODO: calling signUp api implementation there :
    try {
      await signUp(input);
      navigate("/verifyEmail");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={SignUpSubmitHandler}
        className="bg-white p-6 md:p-8 w-full max-w-md border-none shadow-none md:border md:shadow-lg rounded-lg"
      >
        <div className="mb-4 text-center">
          <h1 className="font-extrabold text-5xl text-gray-800 font-heading">
            TasteVibe
          </h1>
        </div>
        <div className="relative mb-4">
          <Input
            type="text"
            name="fullName"
            value={input.fullName}
            onChange={ChangeEventHandler}
            placeholder="Enter your Name"
            className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <User className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          {errors?.fullName && (
            <span className="text-sm text-red-600">{errors.fullName}</span>
          )}
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
        <div className="relative mb-4">
          <Input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={input.password}
            onChange={ChangeEventHandler}
            className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <LockKeyhole className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          {errors?.password && (
            <span className="text-sm text-red-600">{errors.password}</span>
          )}
        </div>
        <div className="relative mb-6">
          <Input
            type="text"
            name="contact"
            placeholder="Enter your Contact"
            value={input.contact}
            onChange={ChangeEventHandler}
            className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <PhoneCallIcon className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          {errors?.contact && (
            <span className="text-sm text-red-600">{errors.contact}</span>
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
              Sign Up
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-indigo-600 underline ml-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
