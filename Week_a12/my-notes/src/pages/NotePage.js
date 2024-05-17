import React, {useState, useEffect} from 'react'
import {
  useParams, 
  useNavigate
} from "react-router-dom";
// import notesData from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = (props) => {
  let noteId = useParams().userId;
  // console.log("noteId: ", noteId);

  // let note =  notesData.find(note => note.id === Number(noteId));
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote()
  }, [noteId])
  //anytime "noteId" changes, update the site

  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(note)
    })
    navigate('/');
  }

  const navigate = useNavigate();
  let handleSubmit = () => {
    updateNote();
    navigate('/');
  }

  return (
    <div className='note'>
        <div className='note-header'>
          <h3>
            <Link to="/">
              <ArrowLeft onClick={handleSubmit}/>
            </Link>
          </h3>
          <button onClick={deleteNote}>Delete</button>
        </div>

        <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}>
        </textarea>
        
    </div>
  )
}

export default NotePage