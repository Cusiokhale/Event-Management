import { createContext, useContext, useMemo, useState } from "react";

type SharedMessageContextValue = {
  sharedMessage: string;
  setSharedMessage: (msg: string) => void;
};

const SharedMessageContext = createContext<SharedMessageContextValue | undefined>(
  undefined
);

export function SharedMessageProvider({ children }: { children: React.ReactNode }) {
  const [sharedMessage, setSharedMessage] = useState("Hello from shared state");

  const value = useMemo(
    () => ({ sharedMessage, setSharedMessage }),
    [sharedMessage]
  );

  return (
    <SharedMessageContext.Provider value={value}>
      {children}
    </SharedMessageContext.Provider>
  );
}

export function useSharedMessage() {
  const ctx = useContext(SharedMessageContext);
  if (!ctx) throw new Error("useSharedMessage must be used within SharedMessageProvider");
  return ctx;
}