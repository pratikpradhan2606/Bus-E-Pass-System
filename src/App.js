import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DashboardApp from './components/components/Dashboard/App/DashboardApp.jsx'
import Contact from './pages/Contact';
import CheckPass from './pages/CheckPass.js';

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<DashboardApp/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/checkPass' element={<CheckPass/>}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
