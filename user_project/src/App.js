
import React from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
// import Nav from './Nav';


import Home from './Home';
import Data from './Data';

// import Card from './Card.js';
  function App(){


  return(
    <div className="App">
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/data" component={Data}/> 
      </Switch>
      </BrowserRouter>

      {/* <Home/>
      <Data/> */}
      </>
    </div>
  );
}; 
export default App;