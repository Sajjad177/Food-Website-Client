import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignUpInputState } from "@/Schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneCallIcon, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const loading = false;
  const [input, setInput] = useState<SignUpInputState>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const SignUpSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={SignUpSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Food House</h1>
        </div>
        <div className="relative mb-3">
          <Input
            type="text"
            name="fullName"
            value={input.fullName}
            onChange={ChangeEventHandler}
            placeholder="Enter your Name"
            className="pl-10 focus-visible:ring-1"
          />
          <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
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
        </div>
        <div className="relative mb-3">
          <Input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={input.password}
            onChange={ChangeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        <div className="relative">
          <Input
            type="contact"
            name="contact"
            placeholder="Enter your Contract"
            value={input.contact}
            onChange={ChangeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <PhoneCallIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
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
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Already Have account
          <Link to="/login" className="text-red-500 underline ml-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
