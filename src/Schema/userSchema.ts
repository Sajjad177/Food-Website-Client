import { z } from "zod";

export const userSignUpSchema = z.object({
  fullName: z.string().min(1, "Full Name is required "),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password Must be 6 characters"),
  contact: z.string().min(10, "Contact Number must be 10 digit"),
});

// When you user zod then it provide typeof then you cannot define other type.
export type SignUpInputState = z.infer<typeof userSignUpSchema>;



export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password Must be 6 characters"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
