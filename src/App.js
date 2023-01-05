import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Title from './components/title';
import Connection from './components/connection';
import Addalbum from "./components/addalbum";
import Albumid from "./components/Albumids";

function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
      <Route path ="/" element={<Connection />}/>
      <Route path = "/addalbum" element={<Addalbum/>}/>
      <Route path = "/album/:id" element={<Albumid/>}/>  
      </Routes>
      <Footer />
    </div>
  );
}
export default App