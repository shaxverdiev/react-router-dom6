import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import NotFoundPage from './pages/NotFoundPage'
import SinglePage from './pages/SinglePage';
import Createpost from './pages/Createpost';
import EditPost from './pages/EditPost';

import Layout from './components/Layout';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="about" element={<Aboutpage/>}/>
      <Route path="posts" element={<Blogpage/>}/>
      <Route path="posts/:id" element={<SinglePage/>}/>
      <Route path="posts/:id/edit" element={<EditPost/>}/>
      <Route path="posts/create" element={<Createpost/>}/>
      <Route path="*" element={<NotFoundPage/>}/> 
    </Route>
    </Routes>
    </>
  );
};

export default App;

// Layout - это общая обертка которая будет отрисовываться всегда и в 
// в рамках этой общей обертки мы будем динамичски чтото менять

// причем Layout предоставляет некий placeHolder кула и будет отрисовываться все содержимое
// path="*" -- если ни одна ссылка не найдена

// index говорит что этот компонент работает по адресу LayOut