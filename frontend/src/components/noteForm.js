import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const NoteForm = () => {

    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)

    const handleAdd = async () => {
        if (window.confirm('Are you ready to submit')) {
            let form = new FormData()

            form.append('title', title)
            form.append('content', content)

            await axios({
                method: 'POST',
                url: 'http://localhost:8000/api/notes/form/',
                data: form
            }).then(response => response.data)

        }
    }

    return (

        <div>
            <h2>Create New Note</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What would you like to document?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control value={content} onChange={(e) => setContent(e.target.value)} as="textarea" rows={3} placeholder="Enter Content Here" />
                </Form.Group>

                <button className="btn btn-primary btn-block" onClick={handleAdd} >Submit Note</button>
            </Form>
        </div>

    )
}

export default NoteForm