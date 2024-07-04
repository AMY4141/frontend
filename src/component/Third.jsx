import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Third = () => {
    var[input,setInput]=useState("AA")
    var[output,setOutput]=useState()
    
    const inputHandler=(event)=>{
        console.log(event.target.value)//to get it directly use event(variablename).target.value
        setInput(event.target.value)
    }
    const displayValue=()=>{
        console.log("clicked");
        setOutput(input);
    }
  return (
    <div style={{textAlign:"center", marginTop:"20%"}}>
        <Typography variant='h3'>Enter Here {output}</Typography>
        <br/>
      <TextField variant='outlined' label="name" onChange={inputHandler}/>
      <Button variant="contained" color="success" onClick={displayValue}>Submit</Button>
    </div>
  )
}

export default Third
