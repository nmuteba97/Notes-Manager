import axios from 'axios'


export async function getNotes(){
    return axios.get('http://127.0.0.1:8000/api/notes/')
    .then(response=>response.data)
    
}

export function deleteNote(noteId){
    return axios.delete('http://127.0.0.1:8000/api/notes/' + noteId + '/',{
        method: 'DELETE',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })
    .then(response => response.data)
}


export function updateNote(noteId,note){
   
    return axios.put('http://127.0.0.1:8000/notes/'+ noteId + '/',{
                                           
        title: note.title.value,
        content : note.content.value,
        date_created : note.date_created.value
                                                   
    })
    .then(response=>(response.data))
   
    
    .catch((error)=>{
        console.log(error)
    })

}
