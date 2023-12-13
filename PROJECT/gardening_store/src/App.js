import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Bestselling from "./components/Bestselling";
import Seeds from "./components/Seeds";
import Soil from "./components/Soil";
import Growbags from "./components/Growbags";
import Pots from "./components/Pots";
import Tools from "./components/Tools";
import Feedback from "./components/Feedback";
// import BootstrapNavbar from "./components/BootstrapNavbar";
// import Navbar from "./components/Navbar";
import NavbarBoot from "./components/NavbarBoot";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <BootstrapNavbar /> */}
        <NavbarBoot/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Aboutus />} />
          <Route path='/' element={<Bestselling />} />
          <Route path='/' element={<Seeds />} />
          <Route path='/' element={<Soil />} />
          <Route path='/' element={<Growbags />} />
          <Route path='/' element={<Pots />} />
          <Route path='/' element={<Tools />} />
          <Route path='/' element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
