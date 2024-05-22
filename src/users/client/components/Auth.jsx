import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState('21')

  const login = (user) => {
    setAuth(auth)
  }

  const logout = () => {
    setAuth(null)
  }

  return <AuthContext.Provider value={{auth, login, logout}}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext((AuthContext))
}
