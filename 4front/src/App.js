import { Routes,Route } from 'react-router';
import './App.css';
import Footer from './components/footer';
import Title from './components/title';
import Connection from './components/connection';
import Addalbum from "./components/addalbum";
import Albumid from "./components/albumid";

function App() {
  return (
    <div className="App">

      <Title />
      <Routes>
      <Route exact path ="/" element={<Connection />}/>
      <Route exact path = "/addalbum" element={<Addalbum/>}/>
      <Route exact path = "/albumid" element={<Albumid/>}/>  
      </Routes>
      <Footer />

    </div>
  );
}