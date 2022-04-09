
import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {Routes, Route,HashRouter    } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
