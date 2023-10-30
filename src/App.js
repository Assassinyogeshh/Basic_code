import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddReport from './Components/AddReport'
import WorkForce from './Components/WorkForce'
import Equipment from './Components/Equipment'
import Consumables from './Components/Consumables'
function App() {
  return (
    <>
    <BrowserRouter>
   <AddReport/>
    <Routes>
       <Route path='/workforce' element={<WorkForce/>} />
       <Route path='/equipment' element={<Equipment/>}/>
       <Route path='/consumables' element={<Consumables/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
