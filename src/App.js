import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import NotFoundPage from './pages/NotFoundPage'

import Layout from './components/Layout';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="about" element={<Aboutpage/>}/>
      <Route path="blog" element={<Blogpage/>}/>
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