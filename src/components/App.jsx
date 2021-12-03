import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevItems => {
            return [...prevItems, note];
          });
    }
    
  return (
    <div>
      <Header />
      <CreateArea 
          addNote={addNote}
      />
      {notes.map((note, index) => (
          <Note 
              key={index}
              id={index}
              title={note.title}
              content={note.content}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
