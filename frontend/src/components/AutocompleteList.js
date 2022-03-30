import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios'

function CardShop() {
  var carrello =[]
  const[posts, setPosts] = useState([])
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/prodotti/')
      .then(res => {
          setPosts(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  })
    const [id, setAge] = React.useState('');  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
   
    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '12px', transform: 'scale(0.8)' }}
      >
        
      </Box>
    );
    
    
      return (
        
          posts.map(post => <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {post.nome_prod}
              </Typography>
              <Typography variant="h5" component="div">
              {post.nome_prod}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.description}
              </Typography>
              <Typography variant="body1">
              {post.prezzo}€
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
            <TextField
          label="Seleziona quantità"
          id="filled-start-adornment"
          type="number"
          defaultValue={1}
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">N.</InputAdornment>,
          }}
          variant="filled"
        /> <Button size="medium" color='secondary'>Aggiungi</Button>
            </CardActions>
            <br></br>
          </Card>
          
         )
      
        
      );
    
  }
  export default CardShop;
