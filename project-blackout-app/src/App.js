import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Item from './components/Item';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/item" element={<Item/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
