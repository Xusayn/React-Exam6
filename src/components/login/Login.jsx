import React, { useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
const Login = ({setlog ,log,setlogg}) => {
  return (
    <div className='log'>
      
            <form>
              <h1>Login</h1>
                <input onChange={(e)=>setlogg(e.target.value)}  name='inp1' className='inp1' type="text" placeholder='Name...' />
                <input  onChange={(e) => (setlog(e.target.value))} name='inp2' className='inp2' type="text" placeholder='Username...' />
               <Link to='/'><button>Login</button></Link>
            </form>
    </div>
  )
}

export default Login
