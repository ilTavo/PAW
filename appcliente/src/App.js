import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
const data = axios.get("http://127.0.0.1:8000/prodotti/?format=json");

function App() {
  console.log(data);
  return (
    <div className="App">
      <p>data</p>
    </div>
  );
  
}

export default App;
