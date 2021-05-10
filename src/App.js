import './App.css';
import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink 
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/men' component={Men} />
        <Route exact path='/women' component={Women} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cart' component={Cart} />   
      </div>
    </Router> 
  );
}

export default App;
