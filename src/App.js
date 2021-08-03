import React, { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import UploadForm from './components/UploadForm'
function App() {
  const [selectedImg,setSelectedImg]=useState(null)
  return (
    <div className="App">
      <Router>
        <Title/>
      </Router>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
