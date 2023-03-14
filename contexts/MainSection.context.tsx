import { createContext, useContext, useMemo, useState } from "react";

type Context = {
  mainSectionIndex: number;
  setMainSectionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const MainSectionContext = createContext<Context | undefined>(undefined);

export function useMainSectionContext(): Context {
  const context = useContext(MainSectionContext);
  if (!context) {
    throw new Error("MainSectionContext is not defined.");
  }
  return context;
}

export function MainSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mainSectionIndex, setMainSectionIndex] = useState<number>(0);

  const value = useMemo(
    () => ({
      mainSectionIndex,
      setMainSectionIndex,
    }),
    [mainSectionIndex, setMainSectionIndex]
  );

  return (
    <MainSectionContext.Provider value={value}>
      {children}
    </MainSectionContext.Provider>
  );
}
