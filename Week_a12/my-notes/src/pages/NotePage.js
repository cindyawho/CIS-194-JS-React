import React from 'react'
import {
  useParams
} from "react-router-dom";
import notesData from '../assets/data'

const NotePage = (props) => {
  let noteId = useParams().userId;
  // console.log("noteId: ", noteId);

  let note =  notesData.find(note => note.id === Number(noteId));

  return (
    <div>
        <h1>This is a single note page.</h1>
        <p>{note?.body}</p>
    </div>
  )
}

export default NotePage