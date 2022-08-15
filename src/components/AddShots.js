import React, {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function AddShots(props) {

    const [Date,setDate] = useState("")
    const [dateShots,setDateShots] = useState(0)
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        const data={
            player: props.match.params.playerId,
            Date: Date,
            dateShots: dateShots,
        }
      axios.post('http://localhost:8000/shotcontestapi/shots', data).then(res=>{
          navigate('/')
      })  

    }
    return (
        <div>
        <h2>Add Shot Data</h2>
        <form>
       Date: <input type="date" name="Date" align='left' onChange={e=>setDate(e.target.value)}/>
       Num Shots: <input type="number" name="dateShots" align='left' onChange={e=>setDateShots(e.target.value)}/>
       <button onClick={handleSubmit.bind(this)}>Submit</button>

        </form>
    </div>
    );
  }


  export default AddShots;   