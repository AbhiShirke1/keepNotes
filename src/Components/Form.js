import React, { useState } from 'react'

const Form = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    })

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFullName((prevVal) => {
            // if (name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: prevVal.lname
            //     }
            // }

            // else if(name == 'lname'){
            //     return{
            //         fname: prevVal.fname,
            //         lname: value
            //     }
            // }

            return{
                ...prevVal,
                [name]: value
            }
        })
    }

    const onSubmits = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <form >
                <input type="text" name='fname' placeholder='Enter fname' onChange={inputEvent} value={fullName.fname}/>

                <input type="text" name='lname' placeholder='Enter lname' onChange={inputEvent} value={fullName.lname}/>

                <input type="submit" onSubmit={onSubmits} />
            </form>
        </div>
    )
}

export default Form
