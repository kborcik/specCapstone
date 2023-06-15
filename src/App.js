import { Routes, Route } from "react-router-dom";
import './App.css';


import Header from './Components/Header'
import Home from './Components/Home'
import Pomodoro from './Screens/Pomodoro'
import Profile from './Screens/Profile'
import BrownNoise from "./Screens/BrownNoise"
import Survey from './Screens/Survey'


const App = () => {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Pomodoro" element={<Pomodoro/>}/>
      <Route path="/BrownNoise" element={<BrownNoise/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Survey" element={<Survey/>}/>
     </Routes>
    </div>
  );
}

export default App;
