import React, { useEffect, useState } from 'react'
import List from './components/list/List'
import Add from './components/add/Add'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import axios from 'axios'
const App = () => {
  const [log,setlog]=useState('')
  const [logg,setlogg]=useState('')
  const [products,setproducts]=useState([])
  const [serch,setserch]=useState([])

  const fetchproducts = async ()=>{
    try {
    const res= await axios.get(`http://localhost:3000/products`)
    const dataa= await res.data
    setproducts(dataa)
    } catch (error) {
        console.log(error);
    }
}




// const s = async (serch)=>{
//   try {
//     console.log(serch);
//   const res= await axios.get(`http://localhost:3000/products/title=${serch}`)
//   const dataa= await res.data
//   setproducts(dataa)
//   } catch (error) {
//       console.log(error);
//   }
// }

//   useEffect(()=>{
//     s()
//   },[serch])




useEffect(()=>{
    fetchproducts()
},[])


  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<List logg={logg} log={log} products={products} fetchproducts={fetchproducts} serch={serch} setserch={setserch}/>}/>
          <Route path='add' element={<Add log={log} setproducts={setproducts} fetchproducts={fetchproducts}/>}/>
          <Route path='login' element={<Login setlog={setlog} log={log} setlogg={setlogg}/>}/>
          <Route path='profile' element={<Profile logg={logg} log={log}/>}/>
        </Routes>
    </React.Fragment>
  )
}

export default App
