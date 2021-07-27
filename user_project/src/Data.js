
import {useState, useEffect } from 'react';
import React from 'react';
import Card from './Card.js';
import Run from './Run'
import './Data.css';
const Data=() =>{
  const [users,setUsers]=useState([]);
  const [loading, setloading] = useState(false);
   const userDetails =async () =>{
         let userData;
          try{
            const response=await fetch('https://reqres.in/api/users?page=1');
             userData =await response.json();
             setloading(true);
          }
          
          catch(errors){
            console.log(errors);
          }
           
           setUsers(userData.data);
           console.log(userData.data);
      }
  useEffect(() =>{
   userDetails();
  },[]);

  return(
    <>
    { loading ?
    <div className="Data">
 
      <div className="b2"></div>
      <div className="b3"></div>
      <div className="b4"></div>
      <div className="b5"></div>
    {users.map((user, id)=>(
      <Card userData={user} key={id}/>
    ))}
    </div>
     :<Run className="run"/> }
  
   
</>
);
};

  export default Data;
