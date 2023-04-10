import React from 'react'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export default function TrendingCard(props) {
  return (
    <Box sx={{
        height:'45vh',
        width:'50vw',
        overflowX:'scroll',
        bgcolor:"#2D2727",
        display:'flex',
        padding:'5vh',
        borderRadius:'10px',
        "&::-webkit-scrollbar":{
            display:'none'
        }
    }}>
    <Stack direction={"row"} spacing={5}>
    {
        props.data[0].images.map((Element)=>(
            <img alt="loading" src={Element.img} style={{height:'45vh',width:'50vw'}}/>
        ))
    }
    </Stack>
    </Box>
  )
}
