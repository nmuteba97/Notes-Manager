import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { FaBeer } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { getNotes, deleteNote } from '../services/NoteService';

import { useNavigate} from "react-router-dom";



const NotesManager = () => {
    const [notes, setNotes] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editNote, setEditNotes] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false)


useEffect(() => {
    let mounted = true;
    if (notes.length && !isUpdated) {
        return;
    }
    getNotes()
        .then(data => {
            if (mounted) {
                setNotes(data);
            }
        })
    return () => {
        mounted = false;
        setIsUpdated(false);
    }
}, [isUpdated, notes])





const handleDelete = (e,noteId) => {
    if (window.confirm('Are You Sure?')){
        // e.preventDefault();
        deleteNote(noteId)
        // alert('Success');
        setIsUpdated(true);
        // .then((result)=>{
        //     alert(result);
        //     setIsUpdated(true);
        // },
        // (error)=>{
        //     alert("Error");
        // })
    }
};

const navigate = useNavigate()


const navDetail = (e,noteId) =>{
    if(window.confirm("Do you want to edit?")){
        navigate(`/api/notes/${noteId}`)
    }
}

const navNoteForm = (e) =>{
    if(window.confirm("Do you want to create a Form")){
        navigate('/api/notes/form')
    }
}



return(
    <div className="container-fluid side-container">
    <div className="row side-row" >
    <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
            <thead>
            <tr>
    
              <th>Title</th>
              <th>Content</th>
              <th>Date Created</th>
        
            </tr>
            </thead>
            <tbody>
              { notes.map((n) =>

              <tr key={n.noteId}>
              <td>{n.title}</td>
              <td>{n.content}</td>
              <td>{n.date_created}</td>
          
              <td>

              {/* <Link className='btn btn-primary m-2' to ={`/api/notes/${n.noteId}`}>Update</Link> */}

              <Button onClick={event => navDetail(event, n.noteId)}>Update</Button>

              <span>&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>


              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,n.noteId)}>
                    {/* <RiDeleteBin5Line /> */}Delete
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
            </td>
            </tr>)}
          </tbody>
        </Table>
        <ButtonToolbar>
            <Button variant="primary" onClick={navNoteForm} >
            Add Note
            </Button>
     
        </ButtonToolbar>
    </div>
    </div>
)
              }
export default NotesManager;