import React, {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function AddPlayer() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [age,setAge] = useState(0)
    const navigate = useNavigate()

    function handleSubmit(event){
      event.preventDefault()
        const playerData={
            firstName: firstName,
            lastName: lastName,
            age:age
        }
      axios.post('http://localhost:8000/shotcontestapi/players', playerData).then(res=>{
          navigate('/')
      })  

    }
    return (
      <div>
          <h2>Create Player:</h2>
          <form>
         First Name: <input type="text" name="firstName" align='left' onChange={e=>setFirstName(e.target.value)}/>
         Last Name: <input type="text" name="lastName" align='left' onChange={e=>setLastName(e.target.value)}/>
         Age Name: <input type="text" name="age" align='left' onChange={e=>setAge(e.target.value)}/>
         <button onClick={handleSubmit.bind(this)}>Submit</button>

          </form>
      </div>
    );
  }


  export default AddPlayer;