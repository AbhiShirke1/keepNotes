import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Ndata from './Components/Ndata';
import RealTime from './Time/RealTime';
import Form from './Components/Form';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { createContext, useState } from 'react';
import ComA from './Context/ComA';
import RouteA from './Components/RouteA';
import RouteB from './Components/RouteB';
import RouteC from './Components/RouteC';
import { Routes, Route, Link } from 'react-router-dom'


const Lname = createContext()
function App() {

  const d = (val) => {
    return (
      <Body
        imgsrc={val.imgsrc}
        names={val.names}
        link={val.link}
      />
    )
  }

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    })
  }

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id
      })
    )
  }


  return (
    <>
      {/* <Navbar/> */}

      {/* {Ndata.map(d)} */}
      {/*  */}
      {/* <RealTime/>  */}
      {/* <Form/> */}

      <Header />
      <CreateNote passNote={addNote} />
      {/* <Note/> */}

      <div className="out">
        {addItem.map((val, index) => {
          return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        })}
      </div>

      {/* <Lname.Provider value={"Shirke"}> */}
      {/* <ComA /> */}

      {/* </Lname.Provider> */}

      {/* Routing */}

      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/user/a'>User </Link>


      <Routes>
        <Route path='/' element={<RouteA/>}> </Route> 
        <Route path='/about' element={<RouteB/>}> </Route>
        <Route path='/user/:fname' element={<RouteC/>}></Route>
      </Routes> */}

    </>
  )
}

export default App;
// export {Lname}