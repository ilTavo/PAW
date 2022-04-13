import React, { useState } from 'react';
import './App.css';
import Main from './components/ordinazioniMenu';
import Login from './components/Login';
import DataFetching from './components/DataFetchingStyle';
import Drawer from './components/Menu';
import Carrello from './components/Carrello';
import Product from './components/Product';



export default function App() {
 const [cartItems, setCartItems] = useState([]);
 const onAdd =(product) =>{
  const exist = cartItems.find(x=>x.id === product.id);
  if(exist){
     setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty: exist.qty +1}:x
      )
    )
   } else {
    setCartItems([...cartItems, {...product, qty:1 }]);
   }
  };
  if (localStorage.getItem('token')=="") {
    return (
      <div className="App">
        <header className="App-header">              
        </header>    
        <Login></Login>
      </div>
    );
    
  } else {
    return (
      <div className="App">
        <header className="App-header">   
        <Drawer></Drawer>     
        <Main onAdd={onAdd} ></Main>
        <Carrello cartItems={cartItems} onAdd={onAdd}></Carrello>
        </header>    
      
      </div>
    );
  }
}