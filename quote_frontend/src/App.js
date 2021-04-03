import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SalesAEditPage from "./pages/SalesAEditPage";
import QuoteEditPage from "./pages/QuoteEditPage";


function App() {

  //how to handle grabbing json data on the front end
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  //this is whats on the screen
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
      <Route exact path="/" render={(props) => <HomePage {...props} component={HomePage}/>} />
      <Route path="/sales" render={(props) => <SalesAEditPage {...props} component={SalesAEditPage}/>}  />
      <Route path="/quotes" render={(props) => <QuoteEditPage {...props} component={QuoteEditPage}/> } />
      </BrowserRouter>
    </div>
  );
}

export default App;
