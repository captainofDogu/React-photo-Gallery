import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import App from './App'
import Detay from './detay'

const Dom = () => {
    const params = useParams();
    console.log(params)
  return (
<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='detay/:postId' element={<Detay />} />
            
            
            
            
        </Routes>
    </BrowserRouter>
    </>
  )
 
}

export default Dom
