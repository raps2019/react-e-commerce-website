import './App.css';
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink,
  useHistory,
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Amplifiers from './components/Amplifiers';
import Speakers from './components/Speakers';
import ProductPage from './components/ProductPage';
import items from './components/items';
import SearchResults from './components/SearchResults';


const App = () => {

  const routes = [
    { path:'/', name:'Home', Component: Home, },
    { path:'/speakers', name:'Speakers', Component: Speakers, },
    { path:'/amplifiers', name:'Amplifiers', Component: Amplifiers, },
    { path:'/about', name:'About', Component: About, },
    { path:'/cart', name:'Cart', Component: Cart, },
    { path:'/productPage/:sku', name:'ProductPage', Component: ProductPage, },
    { path:'/searchResults', name:'SearchResults', Component: SearchResults }
  ]


  
  const [ cartList, setCartList ] = useState([]);
  const [ cartQuantity, setCartQuantity ] = useState(0);
  const [ totalCartValue, setTotalCartValue ] = useState(0);
  const [ searchText, setSearchText ] = useState('');
  const [ searchResults, setSearchResults] = useState([]);

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

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearchSubmit = () => {
    if (searchText) {
      let text = searchText.toLowerCase();
      let results = items.filter( item => 
        item.model.toLowerCase().includes(text) 
        || item.manufacturer.toLowerCase().includes(text) 
        || item.category.toLowerCase().includes(text)
      )
      setTimeout( () => { setSearchResults(results) },100) 
    } else {
      setSearchResults([]);
    }
  }


  
  
  useEffect( () => {
    setCartQuantity( cartList.reduce((total, item) => total + item.quantity , 0) ); 
    setTotalCartValue( cartList.reduce( (total, item) => total + (item.price * item.quantity), 0) );
  }, [cartList])

  useEffect ( () => {
    console.log(searchResults);
  }, [searchResults])

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
            handleSearchInputChange={handleSearchInputChange}
            handleSearchSubmit={handleSearchSubmit}
          />
        </CSSTransition>
        <div className="container__content">

          <Switch>
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
                        searchResults={searchResults}
                        searchText={searchText}
                      />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
