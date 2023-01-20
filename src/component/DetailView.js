import React, { useEffect, useState } from 'react'
import {useParams}from 'react-router-dom';

const DetailView = () => {
  const[creater,setCreater]=useState([]);
  const[recipe,setRecipe]=useState([]);
  const[ingredients,setIngredients]=useState([]);
  const[process,setProcess]=useState();
  const {id,cid}=useParams();
  
  useEffect(()=>{
    fetch(`http://localhost:3001/recipe/${id}`).then((resp)=>{
      resp.json().then((result)=>{
        setRecipe(result);
      })
    })
    fetch(`http://localhost:3001/creator/${cid}`).then((resp)=>{
      resp.json().then((result)=>{
        setCreater(result);
      })
    })
    fetch(`http://localhost:3001/ingredient/${id}`).then((resp)=>{
      resp.json().then((result)=>{
        setIngredients(result);
      })
    })
    fetch(`http://localhost:3001/process/${id}`).then((resp)=>{
      resp.json().then((result)=>{
        setProcess(result);
      })
    })
  },[])

  return (
    <div>
      <h1>Details</h1>
      <div className='details'>
        {
          recipe && <img src={recipe.imgurl} alt={recipe.imgurl} />
        }
        {
          recipe && <div><span style={{fontWeight:'700'}}>Recipe:</span> {recipe.name}</div>
        }
        {
          creater && <div><span style={{fontWeight:'700'}}>Creater:</span>: {creater.name}</div>
        }
        {
          recipe && <div><span style={{fontWeight:'700'}}>Description:</span> {recipe.desc}</div>
        }
        
        {
          ingredients && <div><span style={{fontWeight:'700'}}>Ingredients:</span> {ingredients.items}</div>
        }
        {
          ingredients &&  <div> <span style={{fontWeight:'700'}}>Amount:</span>{ingredients.amount} {ingredients.unit}</div>
        }
        {
          process && <div><span style={{fontWeight:'700'}}>Steps of making:</span> {process.step}</div>
        }
      </div>
    </div>
  )
}

export default DetailView
