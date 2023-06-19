import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import "./resimstyl.css"
import './header.css'
import {Link} from 'react-router-dom';

const Detay = () => {
    const location = useLocation();
    console.log("location",location)
    const data = location.state?.fileobj
    const params = useParams()
    console.log("params",params)
    let i = 0
  return (
    <>
    <div className='genel'>
      <Link to="/" style={{color:'black'}}>
            <h1 className='header-content' style={{ textAlign:'center' ,marginBottom:'50px',marginTop:'20px' }}>Image Gallery Details</h1>
      </Link>
    <div className="Input ">
        <a href={data} >
            <img src={data} alt="resmin kaynağı" className='resimB' id={i++} />
        </a>
        <div className='asd'>
          <label style={{marginTop:'30px'}} htmlFor="input" className="Input-label">Dosya kaynağı :</label>
          <input style={{marginTop:'10px'}} type="text" id="input" className="Input-text" value={data} readOnly />
        </div>
     </div>

    

    </div>

    <div className="footer-copyright text-center" style={{marginTop:'50px'}}>&copy; Developed with ❤️ by
    <a href="https://www.linkedin.com/in/do%C4%9Fuhan-%C3%B6nder-b0b009198/" style={{fontFamily: 'sans-serif' }} className="white-text" target="_blank"> <b> Doğuhan Önder</b> </a>
  </div>
    </>
  )
}

export default Detay
