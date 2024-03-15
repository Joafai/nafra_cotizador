import create from "zustand";
import { persist } from "zustand/middleware";

type Session = {
  infoAutoAccessToken?: string;
  infoAutoRefreshToken?: string;
};

type UserStore = {
  name?: string;
  lastName?: string;
  email?: string;
  session?: Session;
  setName: (name?: string, lastName?: string) => void;
  setEmail: (email?: string) => void;
  setSession: (session?: Session) => void;
};

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      setName: (name, lastName) => {
        set({
          name,
          lastName,
        });
      },
      setEmail: (email) => {
        set({
          email,
        });
      },
      setSession: (session) => {
        set({
          session,
        });
      },
    }),
    { name: "user-session" }
  )
);

export { useUserStore };
