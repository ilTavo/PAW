import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/AddCircleOutline';


export default function Product(props) {
    const {product, onAdd} = props;
 
  return (
    <Card sx={{ }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        
        title={product.nome_prod}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {product.description} - 
        €{product.prezzo}
        </Typography>
      </CardContent>
      <CardActions >
      <TextField id="standard-basic" label="N" placeholder="0" variant="standard" type="number"/>
      <Button variant="outlined" onClick={onAdd} startIcon={<AddIcon />}></Button>      
        
      </CardActions>
      
    </Card>
  );
}
