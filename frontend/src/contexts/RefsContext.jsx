import {React, useContext, createContext } from 'react';

const RefsContext = createContext();

export function useRefs() {
  return useContext(RefsContext);
}

export function RefsProvider({children}) {


  return(
    <RefsContext.Provider value={{
    }}>
      {children}
    </RefsContext.Provider>
  );
}