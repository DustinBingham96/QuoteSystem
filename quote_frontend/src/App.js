import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SalesAEditPage from "./pages/SalesAEditPage";
import QuoteEditPage from "./pages/QuoteEditPage";
import SalesLanding from "./pages/SalesLanding";
import AdminPage from "./pages/AdminPage";
import AdminAssociate from "./pages/AdminAssociate";



function App() {

  /*/how to handle grabbing json data on the front end
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/


  //this is whats on the screen
  return (

      <div>
        
        
      <BrowserRouter>
        <Route exact path="/" render={(props) => <HomePage {...props} component={HomePage}/>} />
        <Route exact path="/sales" render={(props) => <SalesAEditPage {...props} component={SalesAEditPage}/>} />
        <Route exact path="/quotes" render={(props) => <QuoteEditPage {...props} component={QuoteEditPage}/>} />
        <Route exact path="/salesLand" render={(props) => <SalesLanding {...props} component={SalesLanding}/>} />
        <Route exact path="/AdminPage" render={(props) => <AdminPage {...props} component={AdminPage}/>} />
        <Route exact path="/AdminAssociate" render={(props) => <AdminAssociate {...props} component={AdminAssociate}/>} />
        
      </BrowserRouter>

   

    </div>
  
  );
}

export default App;
