import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getNotes } from '../services/NoteService';
import "../App.css";

const Notes = ()=>{
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        let mounted = true;
        getNotes()
        .then(data =>{
            if(mounted){
                setNotes(data)
            }
        })
        return ()=> mounted = false
    })


    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
         <p id="before-table"></p>
             <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
             <thead>
                 <tr>
                 <th>ID</th>
                 <th>Title</th>
                 <th>Content</th>
                 <th>Date Created</th>
              
                 </tr>
             </thead>
             <tbody>
                 {notes.map((n) =>
                 <tr key={n.id}>
                     <td>{n.noteId}</td>
                     <td>{n.title}</td>
                     <td>{n.content}</td>
                     <td>{n.date_created}</td>
                  
                 </tr>)}
             </tbody>
         </Table>
         </div>
       </div>
       );
}


export default Notes