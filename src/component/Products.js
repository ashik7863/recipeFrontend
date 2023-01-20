import React, { useEffect, useState } from "react";
import {Link,useNavigate}from 'react-router-dom';

const Products = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipe").then((result) => {
      result.json().then((resp) => {
        setRecipe(resp);
      });
    });
  }, []);
  const navigate = useNavigate();
  const logOut=()=>{
    localStorage.removeItem('login');
    navigate('/');
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Item</h1>
      <button style={{marginLeft:'45%',padding:'5px 10px'}} onClick={logOut}>Log Out</button>
      {
        recipe.map((item,idx)=>(
            <div key={idx} className='main'>
              <Link to={`${item.id}/${item.creatorid}`} style={{textDecoration:'none',color:'black'}}>
                <div>
                  <img src={item.imgurl} alt={item.imgurl} />
                </div>
                <div className="details">
                <div><span style={{fontWeight:'700'}}>Name</span>: {item.name}</div>
                  <div><span style={{fontWeight:'700'}}>Description</span>: {item.desc}</div>
                </div>
                </Link>
            </div>
        ))
      }
      
    </div>
  );
};

export default Products;
