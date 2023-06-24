import React, { useState } from 'react'
import Main from './Main.css'
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const InputEvent = (event) => {
    const { value, name } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })

    // console.log(note);
  }

  const addEvent = (event) => {
    if (note.title.length > 0 && note.content.length>0) {
      props.passNote(note)

      setNote({ title: "", content: "" })
    }
  }

  return (
    <div className='main_area'>
      <form action="">
        <div className="card2">
          <input type="text" name='title' placeholder='Title' value={note.title} onChange={InputEvent} autoComplete='off' /> <br />
          <textarea placeholder='Write a note...' name='content' value={note.content} onChange={InputEvent} cols="0" rows="0"></textarea>

          {/* <button> */}

          <AddIcon className='icon' onClick={addEvent} />
          {/* </button> */}
        </div>
      </form>
    </div>
  )
}

export default CreateNote
