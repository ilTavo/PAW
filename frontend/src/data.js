
import React, {useState, useEffect} from 'react';
import axios  from 'axios'


export default function Dataz() {

 var data =[]
      //localStorage.getItem('token')
      //Qui va passato il TOKEN nell'header ma non funziona, da abilitare con l'autorizzazione in Ordinazioni/views
      axios.get('http://127.0.0.1:8000/prodotti/')
      .then(function (response) {
        // handle success        
        data =response.data
        console.log(data.json());
        console.log(JSON.stringify(data));
      });
    
  return (data) 
}     
