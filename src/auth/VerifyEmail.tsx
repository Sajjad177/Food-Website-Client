import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useState, useRef } from "react";

const VerifyEmail = () => {
    const loading = false;
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<HTMLInputElement[]>([]); 

  const handleChange = (idx: number, value: string) => {
    // Validate the input value (only alphanumeric characters allowed)
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[idx] = value;
        return newOtp;
      });

      // Move to the next input field if the current one is filled
      if (value !== "" && idx < 5) {
        inputRef.current[idx + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Go to the previous input field if backspace is pressed and current input is empty
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRef.current[idx - 1]?.focus();
    }
  };

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
          <div className="flex justify-center gap-2 md:gap-4 mb-4">
            {otp.map((letter, idx) => (
              <Input
                key={idx}
                ref={(element) => (inputRef.current[idx] = element!)} // Correct ref assignment
                type="text"
                value={letter}
                maxLength={1}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="text-center w-10 h-12 md:w-12 md:h-14 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg md:text-xl"
              />
            ))}
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
              Verify
            </Button>
          )}
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
