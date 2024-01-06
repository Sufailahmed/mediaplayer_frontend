
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Watchhistory from './Pages/Watchhistory';
import './bootstrap.min.css'


function App() {
  return (
    <div>
    <Header/>
    <Routes> 
      <Route path='/' element={ <Landing/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/watch' element={ <Watchhistory/>}/>
    </Routes>
 
    <Footer/>
    </div>
  );
}

export default App;
