import React from 'react';
import './App.css';
import TabPanel from './components/tab';
import Login from './components/Login';
import DataFetching from './components/DataFetching';
import DataFetchingStyle from './components/DataFetchingStyle';
import "./components/GlobalVar";


function App() {
 
if (localStorage.getItem('token')=="") {
  return (
    <div className="App">
      <header className="App-header">        
        
      <Login></Login>  
      </header>    
      
    </div>
  );
  
} else {
  return (
    <div className="App">
      <header className="App-header">   
      
      { localStorage.getItem('token') }

      </header>    
      
    </div>
  );
  
}
  

} 

export default App;