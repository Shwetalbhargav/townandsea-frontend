import logo from './logo.svg';
import './App.css';
import  Navbar  from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import CardGrid from './pages/CardGrid';
import SellerDashboard from './components/SellerDashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/CardGrid' element={<CardGrid/>}/>
      <Route path='SellerDashboard' element={<SellerDashboard/>}/>
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
