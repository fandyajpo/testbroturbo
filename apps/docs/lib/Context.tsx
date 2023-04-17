import { ReactNode, createContext, useContext } from "react";

const Context = createContext({ d: "Ha" });

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Context.Provider
      value={{
        d: "Ha",
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCtx = () => {
  const d = useContext(Context);
  return d;
};
