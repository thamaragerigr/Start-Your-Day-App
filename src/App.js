import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
//Components
import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
import Todo from './components/Todo/Todo'
import News from './components/News/News'

function App() {
  return (
    <div className="App">
     <div className="search-box">
       <Switch>
         <Route exact component={Home} path='/'></Route>
         <Route exact component={Weather} path='/weather'></Route>
         <Route exact component={Todo} path='/todos'></Route>
         <Route exact component={News} path='/news'></Route>
       </Switch>
         </div>
    </div>
  );
}

export default App;
