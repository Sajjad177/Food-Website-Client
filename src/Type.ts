import { LoginInputState, SignUpInputState } from "./Schema/userSchema";

type User = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  profilePic: string;
  admin: boolean;
  isVerified: boolean;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  loading: boolean;
  signUp: (input: SignUpInputState) => Promise<void>;
  login: (input: LoginInputState) => Promise<void>;
  verifyEmail: (verifyEmail: string) => Promise<void>;
  checkAuthentication: () => Promise<void>;
  logOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  updateProfile: (input: any) => Promise<void>;
};

export interface FilterOptionState {
  id: string;
  label: string;
}
