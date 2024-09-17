import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { LoginInputState, SignUpInputState } from "@/Schema/userSchema";
import { toast } from "sonner";
import { UserState } from "@/Type";

const API_END_POINT = "http://localhost:8000/api/v1/user";
axios.defaults.withCredentials = true;




export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isCheckingAuth: true,
      loading: false,
      // Sign up API implementation
      signUp: async (input: SignUpInputState) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/signup`, input, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.data.success) {
            console.log(response.data);
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          } else {
            toast.error(response.data.message);
            set({ loading: false });
          }
        } catch (error: any) {
          set({ loading: false });
          toast.error(error?.response?.data?.message || "Signup failed");
          console.error(error);
        }
      },

      // login API implementation
      login: async (input: LoginInputState) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/login`, input, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.data.success) {
            console.log(response.data);
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          } else {
            toast.error(response.data.message);
            set({ loading: false });
          }
        } catch (error: any) {
          set({ loading: false });
          toast.error(error?.response?.data?.message || "Signup failed");
          console.error(error);
        }
      },

      // verify email API implementation
      verifyEmail: async (verificationCode: string) => {
        try {
          set({ loading: true });
          const response = await axios.post(
            `${API_END_POINT}/verify-email`,
            { verificationCode },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
          //   return response.data
        } catch (error: any) {
          set({ loading: false });
          toast.error(error?.response?.data?.message || "verification failed");
          console.error(error);
        }
      },

      // Checking auth : checking token in your cookies if you have token then you are con not do login again for excess home page . After 24 hour then you should login again.
      checkAuthentication: async () => {
        try {
          set({ isCheckingAuth: true });
          const response = await axios.get(`${API_END_POINT}/check-auth`);
          if (response.data.success) {
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
              isCheckingAuth: false,
            });
          }
        } catch (error) {
          set({
            loading: false,
            isAuthenticated: false,
            isCheckingAuth: false,
          });
          console.error(error);
        }
      },

      // Logout
      logOut: async () => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/logout`);

          if (response.data.success) {
            toast.success(response.data.message);
            set({ loading: false, user: null, isAuthenticated: false });
          }
        } catch (error) {
          set({ loading: false });
          console.log(error);
        }
      },
      // Forget password :
      forgotPassword: async (email: string) => {
        try {
          set({ loading: true });
          const response = await axios.post(
            `${API_END_POINT}/forget-password`,
            { email }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            set({ loading: false });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
          console.log(error);
        }
      },
      // reset-password :
      resetPassword: async (token: string, newPassword: string) => {
        try {
          set({ loading: true });
          const response = await axios.post(
            `${API_END_POINT}/reset-password/${token}`,
            { newPassword }
          );

          if (response.data.success) {
            toast.success(response.data.message);
            set({ loading: false });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
          console.log(error);
        }
      },

      //Update-profile :
      updateProfile: async (input: any) => {
        try {
          set({ loading: true });
          const response = await axios.put(
            `${API_END_POINT}/profile/update`,
            { input },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
          console.log(error);
        }
      },
    }),
    {
      // Local storage key name
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

//! time start 12:57:00
