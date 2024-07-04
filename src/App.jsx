import { useState } from 'react'
import'./App.css'
import First from './component/First'
import Sec from './component/Sec'
import Third from './component/Third'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import BasicTab from './component/BasicTab'
// import Hw from './component/Hw'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<First name="Amy" />}/> 
      <Route path='/s' element={<Sec place="RSET"/>}/>
      <Route path='/t' element={<Third/>}/>
      <Route path='/tble' element={<BasicTab/>}/>
      {/* <Route path='/c' element={<Hw/>}/> */}
      
    
      
    </Routes>
    </>
  )
}

export default App
