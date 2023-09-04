import { ReactNode, SetStateAction, createContext, useState } from 'react';

const StoreContext = createContext({} as StoreContextType);
interface StoreContextType {
  count: number;
  setCount: (count: SetStateAction<number>) => void;
}

interface Props {
  children: ReactNode;
}
const StoreProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <StoreContext.Provider
      value={
        {
          count,
          setCount,
        } as StoreContextType
      }
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };