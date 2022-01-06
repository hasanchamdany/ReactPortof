// import logo from './logo.svg';
import React from 'react';
import Sidebar from './components/Sidebar'
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
              <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar/>
            {/* <Main/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
