import { createContext } from "react";

export const DeveloperDataContext = createContext({
  appData: {
    active: "",
  },
  setAppData: () => {},
});
