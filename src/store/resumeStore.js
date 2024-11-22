import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./authStore";

const API_URL =
   import.meta.env.MODE === "development"
      ? "http://localhost:8080/api/resume"
      : "/api/resume";

axios.defaults.withCredentials = true;

export const useResumeStore = create((set) => ({
   createResume: async (resumeData) => {
      const { isAuthenticated, user } = useAuthStore.getState(); // Access auth state from authStore

      if (!isAuthenticated) {
         return { error: "User is not authenticated." }; // Check if user is logged in
      }

      try {
         const response = await axios.post(`${API_URL}/create`, resumeData, {
            headers: {
               Authorization: `Bearer ${user.token}`,
            },
         });
         return { data: response.data };
      } catch (error) {
         return {
            error: error.response?.data.message || "Failed to create resume",
         };
      }
   },
}));
