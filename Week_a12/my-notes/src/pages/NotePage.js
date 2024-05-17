import React, {useState} from 'react'
import {
  useParams
} from "react-router-dom";
// import notesData from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = (props) => {
  let noteId = useParams().userId;
  // console.log("noteId: ", noteId);

  // let note =  notesData.find(note => note.id === Number(noteId));
  let [note, setNote] = useState(null);

  return (
    <div className='note'>
        <div className='note-header'>
          <h3>
            <Link to="/">
              <ArrowLeft />
            </Link>
          </h3>
        </div>

        <textarea value={note?.body}>
        </textarea>
        
    </div>
  )
}

export default NotePage