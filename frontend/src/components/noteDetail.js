import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NoteDetail = () => {

    const [note, setNote] = useState('')

    const { id } = useParams()



    const getSingleNote = async () => {

        const { data } = await axios.get(`http://localhost:8000/api/notes/${id}/`)

        console.log(data)
        setNote(data)
    }

    useEffect(() => {
        getSingleNote()
    }, [])
    return (

        <div>
        <h2>Detail of Single Notes </h2>

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" value={note.title}/> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} value={note.content} />
        </Form.Group>
      </Form>
      </div>
    )
}


export default NoteDetail