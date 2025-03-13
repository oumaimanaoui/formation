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
import Formations from './components/component/formations';
import Start from './components/component/start';
import Interformation from './components/component/Interformation';
import HtmlFormation from './components/component/HtmlFormation';
import CssFormation from './components/component/CssFormation';
import JavascriptFormation from './components/component/JavascriptFormation';
import SqlFormation from './components/component/SqlFormation';
import PythonFormation from './components/component/PythonFormation';
import PhpFormation from './components/component/PhpFormation';
import NodejsFormation from './components/component/NodejsFormation';
import ReactFormation from './components/component/ReactFormation';
import GitLivres from './components/component/GitLivres';
import FigmaFormation from './components/component/FigmaFormation';
import ArtDesign from './components/component/Categories/ArtDesign';
import UiUxDesign from './components/component/Categories/UiUxDesign';
import ComputerScience from './components/component/Categories/ComputerScience';
import WebManagement1 from './components/component/Categories/WebManagement1';
import WebManagement2 from './components/component/Categories/WebManagement2';
import WebManagement3 from './components/component/Categories/WebManagement3';
import WebManagement4 from './components/component/Categories/WebManagement4';
import WebManagement from './components/component/Categories/WebManagement'; // Assurez-vous que le chemin est correct
import WebManagemt from './components/component/Categories/WebManagemt';
import WebManagements from './components/component/Categories/WebManagements';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Déplacer la route par défaut en premier */}
        <Route path="" element={<DrawerContent />} />

        {/* Routes spécifiques */}
        <Route path="/connecter" element={<Connecter />} />
        <Route path="/monpanier" element={<Monpanier />} />
        <Route path="/search" element={<Search />} />
        <Route path="/professeur" element={<Professeur />} />
        <Route path="/student" element={<Student />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/Formations" element={<Formations />} />
        <Route path="/start" element={<Start />} />
        <Route path="/Interformation" element={<Interformation />} />
        <Route path="/formation/html" element={<HtmlFormation />} />
        <Route path="/formation/css" element={<CssFormation />} />
        <Route path="/formation/javascript" element={<JavascriptFormation />} />
        <Route path="/formation/sql" element={<SqlFormation />} />
        <Route path="/formation/python" element={<PythonFormation />} />
        <Route path="/formation/php" element={<PhpFormation />} />
        <Route path="/formation/nodejs" element={<NodejsFormation />} />
        <Route path="/formation/react" element={<ReactFormation />} />
        <Route path="/formation/git" element={<GitLivres />} />
        <Route path="/formation/figma" element={<FigmaFormation />} />
        <Route path="/ArtDesgin" element={<ArtDesign />} />
        <Route path="/UiUxDesign" element={<UiUxDesign />} />
        <Route path="/computerScience" element={<ComputerScience />} />
        <Route path="/WebManagement1" element={<WebManagement1 />} />
        <Route path="/WebManagement2" element={<WebManagement2 />} />
        <Route path="/WebManagement3" element={<WebManagement3 />} />
        <Route path="/WebManagement4" element={<WebManagement4 />} />
        <Route path="/WebManagement" element={<WebManagement />} />
        <Route path="/WebManagemt" element={<WebManagemt />} />
        <Route path="/WebManagements" element={<WebManagements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;