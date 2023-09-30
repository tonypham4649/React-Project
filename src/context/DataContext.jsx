import React, { createContext, useContext } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ value, children }) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
