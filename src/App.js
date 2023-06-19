import { useEffect, useState } from 'react';
import './App.css';
import { storage } from "./firebase"
import { uuidv4 } from '@firebase/util'
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref, uploadBytesResumable,
} from "firebase/storage"
import { upload } from '@testing-library/user-event/dist/upload';
import {Link} from 'react-router-dom';

import "./resimstyl.css"
import Dom from './dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Detay from './detay';
import Galeri from './Galeri'
import './gallery.css'
import './header.css'




function App() {
  const [image, setImage] = useState(null);
  const [imglist, setImglist] = useState([]);
  const [progress, setProgress] = useState(0);
  const imageListRef = ref(storage, "img/")

  // Upload file
  const uploadFile = () => {
    if (image == null) return;

    const imageRef = ref(storage, `img/${image.name + uuidv4()}`)
    const uploadFile = uploadBytesResumable(imageRef, image);

    uploadFile.on('state_changed', (snapshot) => {
      const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgress(progress)
    }, (err) => {

    }, () => {
      setProgress(0);
      getDownloadURL(uploadFile.snapshot.ref).then((url) => {
        let a = 0;
        setImglist((prev) => [...prev, { url: url, ref: uploadFile.snapshot.ref }])
      })
      alert("File uploaded Successfully :)👌")
    });
    setImage(null)
  }
 


  // Delete file
  const deleteHandel = (ref, url) => {
    deleteObject(ref).then((res) => {
      setImglist(imglist.filter((img) => img.url !== url))
      alert("Successfully deleted")
    })
  }

  // Get data
  useEffect(() => {
    const getData = () => {
      listAll(imageListRef).then((res) => {
        res.items.map((item) => {
          getDownloadURL(item).then((url) => {
            setImglist((prev) => [...prev, { url: url, ref: item }])
          })
        })
      })
    }
    getData()
  }, [])

let i =0;




  return (
    
    <>
    <Layout />
    <h1  className='header-content' style={{ textAlign:'center'}}>Image Gallery</h1>
<div style={{display:'flex', width:'50%', marginLeft:'350px',marginTop:'60px',marginBottom:'100px',alignItems:'center'}}>
    <input htmlFor="sd" type="file" className="form-control buton1 "
          id="img-upload"
          accept="image/*"
          onChange={(event) => {
            setImage(event.target.files[0])
          }} />

<button className="btn btn-success mx-3" onClick={uploadFile}>Upload</button>
</div>

{
        progress !== 0 ? (
          <div className='progress my-2'>
            <div className='progress-bar'
              style={{ width: `${progress}%` }}
            >
            </div>
          </div>
        ) : null

      }

    

    <div className='gallery'>
    {imglist && imglist.map((fileobj,index) => (
         <div className='pics' key={index}>
            <button className="btn"
              onClick={() => deleteHandel(fileobj.ref, fileobj.url)}
            >
              X
            </button>
           <Link to={"detay/"+i++} state={{fileobj:fileobj.url}}><img style={{width:'100%'}} src={fileobj.url}/></Link>

         </div>
         
       ))
       }
    </div>

 


  <div className="footer-copyright text-center" style={{marginTop:'50px'}}>&copy; Developed with ❤️ by
    <a href="https://www.linkedin.com/in/do%C4%9Fuhan-%C3%B6nder-b0b009198/" style={{fontFamily: 'sans-serif' }} className="white-text" target="_blank"> <b> Doğuhan Önder</b> </a>
  </div>
 


    
    
</>

   
    
  );

}

export default App;
