import './App.css';
import React, { useState, useEffect } from 'react';
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
  
  const [ cartList, setCartList ] = useState([]);
  const [ cartQuantity, setCartQuantity ] = useState(0);
  const [ totalCartValue, setTotalCartValue ] = useState(0);

  const handleAddToCart = (itemToAdd) => {
    if (cartList.find( item => item.sku === itemToAdd.sku)) {
      setCartList( prevState => prevState.map( item => 
        item.sku === itemToAdd.sku
        ?{...item, quantity: item.quantity + 1}
        :{...item}))
    } else {
      setCartList( prevState => [...prevState, {...itemToAdd, quantity:1}])
    }
  }

  const handleIncrementQuantity = (itemSku) => {
    setCartList( prevState => prevState.map( item => 
      item.sku === itemSku
      ?{...item, quantity: item.quantity + 1}
      :{...item}))
  }

  const handleDecrementQuantity = (itemSku, itemQuantity) => {
    if (itemQuantity > 1) {
    setCartList( prevState => prevState.map( item => 
      item.sku === itemSku
      ?{...item, quantity: item.quantity - 1}
      :{...item}))
    } else {
      handleDeleteItem(itemSku)
      // const newCartList = cartList.filter( item => item.sku !== itemSku )
      // setCartList (newCartList)
    }
  }

  const handleDeleteItem = (itemSku) => {
    const newCartList = cartList.filter( item => item.sku !== itemSku )
    setCartList (newCartList)
  }


  
  useEffect( () => {
    setCartQuantity( cartList.reduce((total, item) => total + item.quantity , 0) ); 
    setTotalCartValue( cartList.reduce( (total, item) => total + (item.price * item.quantity), 0) );
  }, [cartList])

  return (
    <Router>
      <div className="App">
        <CSSTransition
          in={true}
          appear={true}
          timeout={0}
          classNames="container__navbar-"
        >
          <Navbar 
            cartQuantity={cartQuantity}
            totalCartValue={totalCartValue}
          />
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
                    <Component 
                      handleAddToCart={handleAddToCart}
                      handleIncrementQuantity={handleIncrementQuantity}
                      handleDecrementQuantity={handleDecrementQuantity}
                      handleDeleteItem={handleDeleteItem}
                      cartList={cartList}
                      totalCartValue={totalCartValue}
                    />
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
