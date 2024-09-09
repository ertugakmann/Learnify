// store/userStore.js
import create from "zustand";

const useUserStore = create((set) => ({
    userSession: null,
    isLogged: false,
    setUserSession: (userSession) =>
        set({ userSession, isLogged: !!userSession }),
    logout: () => set({ userSession: null, isLogged: false }),
}));

export default useUserStore;
