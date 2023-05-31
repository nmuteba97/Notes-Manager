import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
// import { updateNote } from '../services/NoteService';
import { updateNote } from '../services/NoteService';




const UpdateNoteModal = (props) => {
    console.log(props)
   

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(props)
      

        updateNote(props.note, props.note.noteId)
    
        
  
        .then((result)=>{
            console.log(result)
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Note");
        })
        
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Note Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit()}>
                           

                            <Form.Group controlId="Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="Title" required defaultValue={props.note.title} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Content">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control as="textarea" type="text" name="Content" required defaultValue={props.note.content} placeholder="" />
                            </Form.Group>
                           
                
                          
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" type="submit" onClick={event => updateNote(props.note.noteId,event)}>
                        Save
                </Button>

                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateNoteModal;