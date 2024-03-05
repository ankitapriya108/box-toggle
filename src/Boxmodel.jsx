import React  from 'react'
import {useState} from 'react'
import './Boxmodel.css'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Boxmodel() {
const [data,setData]=useState(false)

 function handleIconClick(){
    setData(!data)
 }
  return (
    <>
    <div className='box'>
        <h1>Box-1 
            <ArrowDropDownIcon onClick={handleIconClick}/>
            
        </h1>
         {data &&(
            <div className='sbox'>
            <img src="https://placehold.co/300x200" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo, id hic nulla animi nihil in, ab sit iure atque dolores optio quasi similique, alias aspernatur obcaecati dolor assumenda? Amet.</p>
            </div>
          )}
        
      
    </div>
    </>
  )
}

  
  export default Boxmodel 


