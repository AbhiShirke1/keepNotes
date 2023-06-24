import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Main.css'

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id)
  }

  return (
    <>
      
        <div className='notes'>
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>

          <DeleteOutlineIcon className='icon2' onClick={deleteNote} />
        </div>
     
    </>
  )
}

export default Note
