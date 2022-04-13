
import Product from './Product';
import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function Main(props){
    const {onAdd} =props;
    const[posts, setPosts] = useState([])
    useEffect(() => {
      //localStorage.getItem('token')
      //Qui va passato il TOKEN nell'header ma non funziona, da abilitare con l'autorizzazione in Ordinazioni/views
       axios.get('http://127.0.0.1:8000/prodotti/')
      .then(res => {
          setPosts(res.data)          
      })
      .catch(err =>{
         // console.log(token)
      })
  },[])
    return(
        <div>
            <h2>PRODOTTI</h2>
            <div className="row">
            {
            posts.map(post => (
            <Product key={post.id} product={post} onAdd={onAdd}></Product>
            ))}
        </div>
        
        </div>
      
    )
}