import { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }){

    const [inputEmail, setInputEmail] = useState('');
    const [inputPass, setInputPass] = useState('');

  return (
    <MainContext.Provider value={{inputEmail,setInputEmail,inputPass,setInputPass}}>
      {children}
    </MainContext.Provider>
  );
}
