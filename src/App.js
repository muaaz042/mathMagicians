import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import CalculatorPage from './components/CalculatorPage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Calculator' element={<CalculatorPage/>}></Route>
        <Route path='/Quote' element={<Quote/>}></Route>
      </Routes>    
    </Router>
  );
}

export default App;
