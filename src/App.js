// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// let name = "<i>Arif</i>";

function App() {

  
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#022250';
      showAlert("success","Dark mode set Successifully")
      // document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success","Light mode set Successifully")
      // document.title = "TextUtils - Light Mode"
    }
  }

  const showAlert= (type,message)=>{
    setAlert({type:type,msg:message})
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }



  return (
    // <>
    //   <h1>This is me</h1>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React with Arif
    //       </a>
    //     </header>
    //   </div>
    // </>

    // <div className="blank">Nice</div>

    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>ervices</li>
    //     <li>Contact</li>
    //   </nav>
    //   <div className="container">
    //     <h1>Hello <i>{name}</i></h1>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus dolorem nesciunt neque voluptatem facilis dicta laudantium repellendus ratione vitae alias ut non asperiores fuga totam, iure nemo, eveniet maxime, autem dolor illum.
    //   </div>
    // </>


    // <>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">TextUtils</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">About</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </>


    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse." mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
      {/* <TextForm heading="Enter the text to analyse." mode={mode} showAlert={showAlert}/> */}
      {/* <About/> */}
    </>

  );
}

export default App;