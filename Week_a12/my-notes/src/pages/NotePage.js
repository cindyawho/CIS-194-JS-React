import React from 'react'
import {
  useParams
} from "react-router-dom";

const NotePage = (props) => {
  // let noteId = match.params.id;
  // console.log("HELLO!!!");
  // console.log("Props: ", props);
  let {userId} = useParams();
  console.log("userId: ", userId);
  return (
    <div>
        <h1>This is a single note page.</h1>
    </div>
  )
}

export default NotePage