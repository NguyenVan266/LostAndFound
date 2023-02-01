import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/login/Login";
import Contact from "./page/Contact";
import Object from "./page/Object";
import Auth from "./components/Auth";
import Required from "./components/Required";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/" element={<Required />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Object" element={<Object />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
