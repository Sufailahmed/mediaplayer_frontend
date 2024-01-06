import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/all API';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Videocard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>
  {
     setShow(true);
  //3 data need to be inserted 1)caption 2)link 3)timestamp
  const {caption,embededLink}=displayVideo;
  const today = new Date;
  const timestamp=new Intl.DateTimeFormat('en-us',{
year:'numeric',
month:'2-digit',
hour:'2-digit',
minute:'2-digit',
second:'2-digit'


  }).format(today)
console.log(timestamp)
let videoDetails={
  caption:caption,
  embededLink:embededLink,
  timestamp:timestamp
}
await addToHistory(videoDetails)
  
  
  }

  const removeVideo = async (id) => {
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
  return (

    
    <>
      <Card style={{ width: '18rem', height: '350px' }} onClick={handleShow}>
        <Card.Img variant="top" src={displayVideo.url} width="100%" height="275px" />
        <Card.Body>


          <div className='d-flex align-items-center justify-content-evenly'>
            <h5>{displayVideo.caption}</h5>
            <Button onClick={() => removeVideo(displayVideo.id)} variant="danger" className='ms-5'><i class="fa-solid fa-trash"></i> </Button>

          </div>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="414" src={`${displayVideo.embededLink}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Videocard