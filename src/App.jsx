import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerContent from './components/component/DrawerContent';
import Connecter from './components/component/connecter';
import Monpanier from './components/component/monpanier';
import Search from './components/component/search';
import Professeur from './components/component/professeur';
import Student from './components/component/student';
import Menu from './components/component/menu';
import Cours from './components/component/cours';
import Formation from './components/component/formation';
import Start from './components/component/start';
import Interformation from './components/component/Interformation';
import  categories from './components/component/categories';
import Categories from './components/component/categories';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connecter" element={<Connecter />} />
        <Route path="/monpanier" element={<Monpanier />} />
        <Route path="/search" element={<Search />} />
        <Route path="/professeur" element={<Professeur />} />
        <Route path="/student" element={<Student />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/start" element={<Start />} />
        <Route path="/Interformation" element={<Interformation />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<DrawerContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

