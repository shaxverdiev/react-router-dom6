import {Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';


// const setActive = (isActive) => isActive ? 'active-link' : '';  // ручная кастомизация когда css атрибут не "active"


const Layout = () => {
  return (
    <div>
         <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/blog'>Blog</CustomLink>
      </header>
      <Outlet/>
      <footer>2022</footer>
    </div>
  );
};

export default Layout;


// outlet говорит разметке куда мы хотим вставить все остальное
// Layout - это общая обертка которая будет отрисовываться всегда и в 
// в рамках этой общей обертки мы будем динамичски чтото менять

// причем Layout предоставляет некий placeHolder кула и будет отрисовываться все содержимое