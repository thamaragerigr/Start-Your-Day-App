import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//Pages
import Home from './pages/Home/Home'
import Weather from './pages/Weather/Weather'
import Todo from './pages/Todo/Todo'
import News from './pages/News/News'
//Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
     <div className="search-box">
       <Switch>
         <Route exact component={Home} path='/'></Route>
         <Route exact component={Weather} path='/weather'></Route>
         <Route exact component={Todo} path='/todos'></Route>
         <Route exact component={News} path='/news'></Route>
       </Switch>
         </div>
         <Footer/>
    </div>
  );
}

export default App;
