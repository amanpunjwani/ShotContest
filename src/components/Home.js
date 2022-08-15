import axios from "axios";
import { useEffect } from "react";
import {useState} from "react"
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [playerData, setPlayerData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/shotcontestapi/players').then(res=>{
            setPlayerData(res.data)
        })
    }, playerData)
    return (
      <div>
        <h2>Players:</h2>
        <table align='center'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {playerData.map(player=><RowCreator item={player}/>)}
            </tbody>
        </table>
        <Link to={'/addPlayer'}> Add a Player </Link>
      </div>
    );
  }

class RowCreator extends React.Component{
    render(){
        var player = this.props.item
        return <tr>
            <td>{player.firstName}</td>
            <td>{player.lastName}</td>
            <td>{player.age}</td>
            <Link to={'/addShots/' + player._id}>Add Data</Link>
        </tr>
    }
}
  export default Home;