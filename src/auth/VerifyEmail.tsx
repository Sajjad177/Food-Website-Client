import { Input } from "@/components/ui/input";
import { useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   idx: number
  // ) => {
  //   const newOtp = [...otp];
  //   newOtp[idx] = e.target.value;
  //   setOtp(newOtp);
  // };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="p-8 rounded-lg w-full max-w-md flex flex-col items-center bg-white md:border md:border-gray-200 md:shadow-lg">
        <h1 className="font-extrabold text-3xl md:text-4xl text-gray-800 mb-4">
          Verify Your Email
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Please enter the 6-digit code sent to your email.
        </p>

        {/* OTP Input Fields */}
        <form>
          <div className="flex justify-center gap-2 md:gap-4">
            {otp.map((letter: string, idx: number) => (
              <Input
                key={idx}
                type="text"
                value={letter}
                maxLength={1}
                // onChange={(e) => handleChange(e, idx)}
                className="text-center w-10 h-12 md:w-12 md:h-14 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg md:text-xl"
              />
            ))}
          </div>
        </form>

        {/* Resend Code Option */}
        <p className="text-sm text-gray-500 mt-6">
          Didn't receive the code?{" "}
          <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
