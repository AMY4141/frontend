import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">
            <Link to={"/"}
            style={{textDecoration:"none",color:"white"}}>
              First
            </Link>
          </Button>
          <Button color="inherit">
          <Link to={"/s"}
            style={{textDecoration:"none",color:"white"}}>
              Sec
              </Link>
          </Button>
          <Button color="inherit">
          <Link to={"/t"}
            style={{textDecoration:"none",color:"white"}}>
              Third
          </Link>
          </Button >
          <Button color="inherit">
          <Link to={"/tble"}
            style={{textDecoration:"none",color:"white"}}>
              table
          </Link>
          </Button>
          <Button color="inherit">
          <Link to={"/c"}
            style={{textDecoration:"none",color:"white"}}>
              card
          </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
