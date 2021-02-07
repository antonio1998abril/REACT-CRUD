
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {Dataprovider} from './GlobalState'
import "bootstrap/dist/css/bootstrap.min.css"


import Header from './components/headers/Header'
import MainPages from './components/mainpages/pages'

function App() {
  return (
    <Dataprovider>
      <Router>
        <div className="App">
          <Header/>
            <MainPages/>
        </div>
      </Router>
    </Dataprovider>
  );
}

export default App;
