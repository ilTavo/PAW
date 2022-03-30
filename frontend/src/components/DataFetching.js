import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetching() {
  

  axios.post('http://127.0.0.1:8000/api/token/auth/', {
    username: 'AdminProject',
    password: 'valery18'
  })
  .then(function (response) {
    console.log(response.data.token);
  })
  return (
     
    <div >
     
      
    </div>
  );
}

export default DataFetching;