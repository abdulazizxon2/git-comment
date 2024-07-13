import React, { createContext } from "react";
export let Context = createContext();
export default function ContextP({ children }) {
  let text = "salom olamim";
  return <Context.Provider value={{ text }}>{children}</Context.Provider>;
}
