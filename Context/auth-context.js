import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
}); 
export default function AuthContextProvider({ children }){
  const [authToken, setAuthToken] = useState(); 

  async function login(token){
    setAuthToken(token);
  };
    

  // Función para hacer logout (no implementada)
  function logout(){
    setAuthToken(null);
  }

  const value = {
    token: authToken, 
    isLoggedIn: !!authToken, 
    login: login, 
    logout: logout, // la funcion de logout
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
