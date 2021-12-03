import React, { useState } from "react";

function CreateArea(props) {
    const [inputText, setText] = useState({
        title:"",
        content:""
    });
    function handleChange(e){
        const target = e.target.name;
        target === "title" ? setText({...inputText, title: e.target.value}) :
        setText({...inputText, content: e.target.value});
        // console.log(inputText);
    }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
        value={inputText.title}
        onChange={handleChange}/>
        <textarea name="content"
        placeholder="Take a note..." rows="3"
        value={inputText.content}
        onChange={handleChange}/>
        <button onClick={(e) => {
        e.preventDefault()
        props.addNote(inputText)
        setText({
        title:"",
        content:""
        })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
