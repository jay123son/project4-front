import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Title from './components/title';
import Connection from './components/connection';
import Addalbum from "./components/addalbum";
import Albumid from "./components/Albumid";

function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
      <Route exact path ="/" element={<Connection />}/>
      {/* <Route exact path = "/addalbum" element={<Addalbum/>}/>
      <Route exact path = "/albumid" element={<Albumid/>}/>   */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App