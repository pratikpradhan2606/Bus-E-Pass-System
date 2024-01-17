import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
