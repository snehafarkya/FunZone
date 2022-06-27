// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navb from './components/Navb';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Music from './components/Music';

function App() {
  return (
   <>
 
   <Navb />
<Routes >
  <Route path="/" element={<Home />} />
  <Route path="/Music" element={<Music />} />

</Routes>

  {/* <Navb />
  <Home /> */}
  </>
  );
}

export default App;
