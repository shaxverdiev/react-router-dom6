import {Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';


// const setActive = (isActive) => isActive ? 'active-link' : '';  // ручная кастомизация когда css атрибут не "active"


const Layout = () => {
  return (
    <div>
         <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/posts'>Blog</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </header>
      <Outlet/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer> надпись видна на каждой странице потому что используется Outlet</footer>
    </div>
  );
};

export default Layout;


// outlet говорит разметке куда мы хотим вставить все остальное
// Layout - это общая обертка которая будет отрисовываться всегда и в 
// в рамках этой общей обертки мы будем динамичски чтото менять

// причем Layout предоставляет некий placeHolder кула и будет отрисовываться все содержимое