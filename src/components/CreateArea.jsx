import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [inputText, setText] = useState({
        title:"",
        content:""
    });

    const [clicked, setClicked] = useState(false);

    function handleChange(e){
        const target = e.target.name;
        target === "title" ? setText({...inputText, title: e.target.value}) :
        setText({...inputText, content: e.target.value});
        // console.log(inputText);
    }

    function showNote(e){
      const target = e.target;
      target.rows = "3";
      setClicked(true);
    }

  return (
    <div>
      <form className="create-note">
      {clicked &&
        <input name="title" placeholder="Title"
        value={inputText.title}
        onChange={handleChange}/>
        }

        <textarea name="content"
        placeholder="Take a note..."
        rows="1"
        value={inputText.content}
        onClick={showNote}
        onChange={handleChange}
        />

        <Zoom
          in={clicked}
        >
        <Fab onClick={(e) => {
        e.preventDefault()
        props.addNote(inputText)
        setText({
        title:"",
        content:""
        })
        }}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
