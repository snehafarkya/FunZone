// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navb from './components/Navb';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Music from './components/Music';
import Movie from './components/Movie';
import Contact from './components/Contact';

function App() {
  return (
   <>
 
   <Navb />
<Routes >
  <Route path="/" element={<Home />} />
  <Route path="/Music" element={<Music />} />
  <Route path="/Movie" element={<Movie />} />
  <Route path="/Contact" element={<Contact />} />

</Routes>

  {/* <Navb />
  <Home /> */}
  </>
  );
}

export default App;
