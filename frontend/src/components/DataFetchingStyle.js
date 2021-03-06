
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState, useEffect} from 'react';
import axios  from 'axios'


function DataFetching() {
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
    const [id, setAge] = React.useState(''); 
    const [carrello, addProd] = React.useState({}); 
    const handleChange = (event) => {
      setAge(event.target.value);
      
    };
    
  return (
     
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">id</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={id}
        label="id"
        onChange={handleChange}
      >
      {
          posts.map(post => <MenuItem value={post.nome_prod}>{post.nome_prod}
          </MenuItem>
         )
      }
      </Select>
    </FormControl>
   
    </Box>
  );
  
}

export default DataFetching;
