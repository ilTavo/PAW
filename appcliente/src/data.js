import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/prodotti/?format=json";

export default function Prodotti() {
  const [prod, setProd] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProd(JSON.parse(response.data, (key,value)=> {return value;}));
    });
  }, []);
  console.log(prod)
  if (!prod) return null;

  return 
  
}