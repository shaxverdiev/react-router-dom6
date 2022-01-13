import {useLocation, Navigate} from 'react-router-dom'
import { useAuth } from '../hook/useAuth';
import React from 'react';

const RequiareAuth = ({children}) => {
  const location = useLocation();
  const {user} = useAuth(); // достаем user из Авторизации 

  if (!user) { // если нет авторизованного польщователя, то делаем переадресацию на страницу регистрации
    return <Navigate to="/login" state={{from: location}}/>
  }
  return children; // если пользователь аворизован то даем ему доступ ко всем приватным страницам (дочерним) компонента AuthProvider
};

export default RequiareAuth;