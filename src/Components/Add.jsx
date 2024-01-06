import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import { uploadVIdeo } from '../services/all API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video, setVideo] = useState({
        id: "",
        caption: "",
        url: "",
        embededLink: ""
    });
    const embededVideoLink = (e) => {
        const { value } = e.target;

        const videoLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
        setVideo({ ...video, embededLink: videoLink })
    }
    console.log(video)
    const handleUpload = async () => {
        const { id, caption, url, embededLink } = video
        if (!id || !caption || !url || !embededLink) {

            toast.warn("Please fill the form Completely")
        }
        else {

            const response = await uploadVIdeo(video)
            if (response.status === 201) {
                toast.success(`Succefully Inserted The Video ${response.data.caption}`)
                setUploadVideoStatus(response.data)

                handleClose();
            }
            else {
                toast.error("Something Went Wrong")
            }
        }
    }

    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>Upload New Video</h5>
                <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5 ms-2" style={{ color: "white" }}></i></button>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>
                        Upload Video
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill The Form</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Vdeo ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Vdeo Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Vdeo Youtube Link" onChange={(e) => embededVideoLink(e)} />


                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={1500}

                theme="colored"
            >

            </ToastContainer >

        </>
    )
}

export default Add