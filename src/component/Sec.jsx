
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sec = (props) => {
    var[name,setName]=useState("Amy");
    const changeName=()=>{
        console.log("btn clicked");
        setName("Home")
    }
    const conName=()=>{
        console.log("clicked");
        setName("Contacts")
    }
    
  return (
    <div style={{margin:'20%',textAlign:'center'}}>
        <Typography variant="h3">Welcome to {name} from {props.place} age</Typography>
        <br/>
      <Button variant='contained' onClick={changeName}>Home</Button>&nbsp;
      <Button variant='contained' color='secondary' onClick={conName}>Contact</Button>
      
    </div>
  )
}

export default Sec
