import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(e) => {
        e.preventDefault()
        props.delete(props.id)
        }}>
          <DeleteForeverIcon />
        </button>
    </div>
  );
}

export default Note;
