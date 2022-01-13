import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';


const Aboutpage = () => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
  {/* находясь в контексте вложенного роута можно не указывать адрес польностью(то есть можно не указывать /about/contacts) */}
        <li><Link to="/about/contacts">Our contacts</Link></li>
        <li><Link to="/about/team"> Our team</Link></li>
      </ul>

    <Routes>
      {/* это вложенные роуты и они предназначены дорисовывать какй-то функионал к которому можно возвращаться по ссылке */}
       <Route path="contacts" element={<h2>Our contacts</h2>}/>
       <Route path="team" element={<h2>Our team</h2>}/>
    </Routes>

    </div>
  );
};

export default Aboutpage;