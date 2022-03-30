import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import "./GlobalVar";


export default function Login() {
  return (
    <Container maxWidth="sm">   
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="username" label="Username" variant="outlined" />
      <TextField id="password" label="password" variant="outlined" />      
      <Button  onClick ={logs}
         variant="outlined" 
        size='large' >LOGIN</Button>    
      
    </Box>
    </Container>

  );
  async function logs() {  

    axios.post('http://127.0.0.1:8000/api/token/auth/', {
      username: 'AdminProject',
      password: 'valery18'
    })
    .then(function (response) {
      console.log('response '+response.data.token);
      localStorage.setItem('token', response.data.token);
      console.log ('local token  '+localStorage.getItem('token'));
      window.location.reload(true);
    })
    return (
       
      <div >
       
        
      </div>
    );
  }
  
}
