import React from 'react'
import './Profile.scss'
import { Link } from 'react-router-dom'
const Profile = ({logg,log}) => {
  return (
    <div className='profilee'>
       <h1> {log? `Welcome : ${logg},${log} `:"User Not Found"}</h1>
      <Link to='/login'> {log? <><button>Logout</button></>:null}</Link>
    </div>
  )
}

export default Profile
