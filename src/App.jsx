import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import HeadTail from "./pages/HeadTail";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <h1 className="logo">React H&T App -(Yash Bisht)</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/head-tail">Head & Tail</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/head-tail" element={<HeadTail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
