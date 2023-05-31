import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Notes from './components/notes'
import NotesManager from './components/notesManager';
import UpdateNoteModal from './components/UpdateNoteModal';
import NoteDetail from './components/noteDetail'
import NoteForm from './components/noteForm';








function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/api/notes' element={<Notes/>}></Route>
        <Route exact path='/api/notesManager' element = {<NotesManager/>} />
        <Route exact path='/api/notes/:id' element={<NoteDetail/>} />
        <Route exact path='/api/:id/update' element = {<UpdateNoteModal/>} />
        <Route exact path='/api/notes/form' element = {<NoteForm/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;