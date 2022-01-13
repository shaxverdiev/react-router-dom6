import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import NotFoundPage from './pages/NotFoundPage'
import SinglePage from './pages/SinglePage';
import Createpost from './pages/Createpost';
import EditPost from './pages/EditPost';
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout';

import RequiareAuth from './hoc/RequiareAuth';
import { AuthProvider } from './hoc/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout/>}> 
      {/* это главная страница  */}
      <Route index element={<Homepage/>}/>
      <Route path="about/*" element={<Aboutpage/>}/>
      {/* переадресация на адрес /about */}
      {/* что бы в истории не сохранилось посещение этого адреса(потому что если нажать из другого окна на кнопку goBack, то нас перекинет на страницу переадресации ) 
      добавлем replace (если true - то история не созранится, false  - история сохранится*/}
      {/* navigate - это обычная переадресация */}
      <Route path="about-us" element={<Navigate to="/about" replace/>}/>  
      <Route path="posts" element={<Blogpage/>}/>
      <Route path="posts/:id" element={<SinglePage/>}/>
      <Route path="posts/:id/edit" element={<EditPost/>}/>
      <Route path="posts/create" element={ // добавляем скрытую ссылку
        <RequiareAuth>
          <Createpost/>
        </RequiareAuth>
      }/>
      <Route path="login" element={<LoginPage/>}/> 
      <Route path="*" element={<NotFoundPage/>}/> 
    </Route>
    </Routes>
    </AuthProvider>
  );
};

export default App;

// Layout - это общая обертка которая будет отрисовываться всегда и в 
// в рамках этой общей обертки мы будем динамичски чтото менять

// причем Layout предоставляет некий placeHolder кула и будет отрисовываться все содержимое
// path="*" -- если ни одна ссылка не найдена

// index говорит что этот компонент работает по адресу LayOut