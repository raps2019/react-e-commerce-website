import './App.css';
import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink 
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Amplifiers from './components/Amplifiers';
import Speakers from './components/Speakers';


const App = () => {

  const routes = [
    { path:'/', name:'Home', Component: Home, },
    { path:'/speakers', name:'Speakers', Component: Speakers, },
    { path:'/amplifiers', name:'Amplifiers', Component: Amplifiers, },
    { path:'/about', name:'About', Component: About, },
    { path:'/cart', name:'Cart', Component: Cart, },
  ]

  return (
    <Router>
      <div className="App">
        <CSSTransition
          in={true}
          appear={true}
          timeout={0}
          classNames="container__navbar-"
        >
          <Navbar />
        </CSSTransition>
        <div className="container__content">
          {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  appear={true}
                  timeout={{ appear:0, enter:750, exit:300 }}
                  classNames="container__page-"
                  unmountOnExit={true}
                >
                  <div className="container__page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </Router> 
  );
}

export default App;
