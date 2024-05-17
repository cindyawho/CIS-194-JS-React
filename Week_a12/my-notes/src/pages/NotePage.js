import React from 'react'
import {
  useParams
} from "react-router-dom";

const NotePage = (props) => {
  let noteId = useParams().userId;
  console.log("noteId: ", noteId);
  return (
    <div>
        <h1>This is a single note page.</h1>
    </div>
  )
}

export default NotePage