import React, { useEffect } from 'react'
import { useNavigate} from "react-router-dom";
const Protect = (props) => {
    const navigate = useNavigate();
    const{Component}=props;
    useEffect(()=>{
        const loginCheck=localStorage.getItem('login');
        if(!loginCheck){
          navigate('/');
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protect
