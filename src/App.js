import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import DashboardApp from './components/components/Dashboard/App/DashboardApp.jsx'
import Contact from './pages/Contact';
import CourseCard from "./components/CourseCard";
import {useEffect} from 'react';

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<DashboardApp/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
