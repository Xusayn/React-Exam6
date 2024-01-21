import React, { useEffect, useState } from 'react'
import 'axios'
import './List.scss'
import { Link, NavLink, Navigate, Router, Routes, useNavigate } from 'react-router-dom'
import Add from '../add/Add'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const List = ({log,logg,products,fetchproducts,serch,setserch}) => {
    const [search,setsearch]=useState('')
    const [set, setset]=useState(true)
    const handl=()=>{
        setset(!set)
    }
    


    const handldelete=async(id)=>{
       if (confirm('Are tou want to delete this product')) {
        try {
            console.log(id); 
            const respdel = await axios.delete(`http://localhost:3000/products/${id}`)
            fetchproducts()
            } catch (error) {
                console.log(error);
            }
       }

    }




    const navigate=useNavigate()
    {log?useEffect(()=>{
        navigate('/')
    },[]) :useEffect(()=>{
        navigate('/login')
    },[])}
    

        

  return (
      
    <div className='List'>
        <nav>

            <ul className='ul1'>
                <li className='tovar'>Товары</li>
                <li className='gray'>Главная  / Товары</li>
            </ul>

            <ul className='flex'>
         <h1> {log? `Username: ${log} ` :null}</h1>  <Link to='login'><button className='list__chiqish'><img src="./public/chiqish.png" alt="" /> Выйти</button></Link>
            </ul>

        </nav>


        <div className="insturments">
            <div className="input">
            <label htmlFor=""><h2>Search By Model</h2></label>
        <input onChange={(e)=>setsearch(e.target.value)}  placeholder='Search...' type="text" />
            </div>
        <Link to= 'add'><button className='soz'><h3>Новый товар</h3></button></Link>
        </div>
        


       
        <div className="homee">
            <div className="th">
                <h3>Наименование</h3>
                <h3>Model</h3>
                <h3>Бренд</h3>
                <h3>Цена</h3>
                <h3>category</h3>


            </div>








            {products?products.filter((product)=>{
                if(search===''){
                    return product
                }else if(product.title.toLowerCase().includes(search.toLowerCase())){
                    return product
                }
            }) 




 




            .map((p)=>(
                <div key={p.id} className="op">
                    <h4> <input className='chekc' type="checkbox" />Товар {p.id}</h4>
                    <h4>{p.title}</h4>
                    <h4>{p.brand}</h4>
                    <h4>{p.price}</h4>
                    <h4>{p.category}</h4>
    
                    <div className="icons">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i onClick={()=>handldelete(p.id)} className="fa-solid fa-trash"></i>
                    </div>
                
                </div>
               )) 


           

            :<div className="home">
           <h2>Вы пока не создали ни одного товара</h2>
           <img src="./public/homeimg.png" alt="" />
           <Link to= 'add'><button>Создать первый товар</button></Link>
             </div>} 
        </div>
        

           
           
           
            
           
       

    {set? <div className="about">
        
        <img onClick={handl}  src="./public/mask.png" alt="" />
        <img src="./public/nastroyka.png" alt="" />
        <Link to='/profile'><img className='profile' src="./public/profile.png" alt="" /></Link>
        <Link to='add'> <img  className='ico' src="./public/gr.png" alt="" /></Link>
    </div> :
    
    <div className="aboutt">
        <img onClick={handl}  src="./public/mask.png" alt="" /> 
        <img src="./public/nastroyka.png" alt="" />
        <img className='profile' src="./public/profile.png" alt="" />
       <Link to='add'><img  className='ico' src="./public/gr.png" alt="" /></Link>
    </div>  }

        

    </div>
  )
}

export default List
