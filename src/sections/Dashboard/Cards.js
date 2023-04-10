import React from 'react'
import {Box,Stack} from '@mui/material';
import { Typography } from '@mui/material'
export default function Cards(props) {
  return (
    <>
    {
      props.data.map((Element)=>(
        <Box>
          <Typography variant='h6'>{Element.name}</Typography>
          <Box sx={{
            bgcolor:"#2D2727",
            borderRadius:'10px',
            overflowX:"auto",
            display:'flex',
            marginBottom:'5vh',
            '&::-webkit-scrollbar':{
              display: "none",
            },
          }}>
            <Stack direction="row" spacing={5} sx={{padding:'3vh'}} >
            {
              Element.images.map((imgs)=>(
                <img alt="loading" src={imgs.img} style={{height: '25vh', width:'20vw',borderRadius:'5px'}} />
              ))
            }
            </Stack>
          </Box>
        </Box>
      ))
    }
    </>
  )
}
