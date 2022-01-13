// через этот компонент мы обеспечиваем все приложение информацие о том - авторизован ли пользователь или нет

import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // методы
  // callback - это Navigate

  // настоящая авторизаия должна выполняться внутри этих функций
  // в данный момент тут фейковая авторизация
  const signin = (newUser, callback) => { 
    setUser(newUser);
    callback()
  }
  const signout = (callback) => {
    setUser(null);
    callback();
  }

  const value = {user, signin, signout}  // эти 3 переменные будут доступны в люьом компоненте
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}