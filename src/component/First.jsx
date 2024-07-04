import { Typography } from '@mui/material'
import React from 'react';

const First = (props) => {
  return (
    <div>
        <h1>hello {props.name}</h1>
      <Typography variant ='h1'>hello</Typography>
      <Typography variant ='h2'>Hello</Typography>
      <Typography variant ='h3'>bye</Typography>
    </div>
  )
}

export default First
