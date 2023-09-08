import { ReactNode, SetStateAction, createContext, useState } from 'react';

const StoreContext = createContext({} as StoreContextType);
interface StoreContextType {
  count: number;
  setCount: (count: SetStateAction<number>) => void;
  isHeaderCollapsed: boolean;
  setIsHeaderCollapsed: (value: SetStateAction<boolean>) => void;
}

interface Props {
  children: ReactNode;
}
const StoreProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);

  return (
    <StoreContext.Provider
      value={
        {
          count,
          setCount,
          isHeaderCollapsed,
          setIsHeaderCollapsed,
        } as StoreContextType
      }
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };