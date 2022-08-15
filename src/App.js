import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AddPlayer from './components/AddPlayer';
import AddShots from './components/AddShots';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addPlayer" element={<AddPlayer/>}/>
        <Route path="/addShots/:playerId" element={<AddShots/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
