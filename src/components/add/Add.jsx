import React, { useEffect, useId, useState } from 'react'
import './Add.scss'
import { Link, useFetchers } from 'react-router-dom'
import axios from 'axios'
const Add = ({log,setproducts,fetchproducts}) => {
    const [product,setproduct]=useState({
      title:'',
      description:'',
      brand:'',
      price:'',

    })
    
    
    

     const post = async()=>{
         try {
           const  res = await axios.post(`http://localhost:3000/products`,product)
           console.log(product); 
           fetchproducts()
          
         } catch (error) {
           console.log(error);
         }
        

     }
  
    





  return (
    <div className='add'>
        <nav>
    <ul className='ul1'>
    <li className='tovar'>Товары</li>
    <li className='gray'>Главная  /Товары  / Товары</li>
    </ul>
    <ul className='flex'>
   {log?<h1>{`Username :  ${log}`}</h1>:null}   <Link to='/login'><button className='list__chiqish'><img src="./public/chiqish.png" alt="" /> Выйти</button></Link>
    </ul>
    </nav>

     
     <div className="about">
        <img src="./public/logo.png" alt="" />
        <img src="./public/nastroyka.png" alt="" />
        <Link to='/profile'><img className='profile' src="./public/profile.png" alt="" /></Link>
        <img  className='ico' src="./public/gr.png" alt="" />
    </div> 






    <div className="addhome">
        <button className='asnov'>Основные</button>
        <div className="inputs">


          <div className="input1">
            
            <label>
              <span>Название *</span>
            <input value={product.title} name='title' onChange={(e)=>setproduct({...product ,title:e.target.value})}  type="text" />
            </label>
          </div>



          <div className="input2">
           
          <label>
           <span>Description</span>
             <input onChange={(e)=>setproduct({...product ,description:e.target.value})} value={product.description} name='description' type="text" />
           </label>


           
           <label>
           <span>Бренд *</span>
             <input onChange={(e)=>setproduct({...product ,brand:e.target.value})} value={product.brand} name='brand' type="text" />
           </label>


           

          </div>


          <div className="input3">
          <label>
           <span>Описание *</span>
             <input onChange={(e)=>setproduct({...product ,price:e.target.value})} value={product.price}t name='price'  type="number" />
           </label>
          </div>





          <div className="input4">
          <label>
           <span>Цена</span>
             <input onChange={(e)=>setproduct({...product ,category:e.target.value})} value={product.category} name='category'  type="text" />
           </label>


           <label>
           <span>Katigory</span>
             <input type="text" />
           </label>
          </div>

          
        </div>


        <div className="addfooter">
          <Link to='/'><button className='sax' onClick={post}>Сохранить</button></Link>
          <button className='otmen'>Отмена</button>

        </div>
    </div>






    </div>
  )
}

export default Add
