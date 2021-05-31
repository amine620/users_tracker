import React, { useState } from "react";
import User from "./User";

const Users = (props) => {


  const [user,setuser]=useState({
      name:'',
      email:'',
      phone:'',
  })


  const [users, setusers] = useState([
    {
      id:1,
      name: "amine",
      email: "amine@gmail.com",
      phone: "12345679",
    },
    {
      id:2,
      name: "mourid",
      email: "mourid@gmail.com",
      phone: "11111111",
    },
    {
      id:3,
      name: "john doe",
      email: "john@gmail.com",
      phone: "12345679",
    },


  ]);

  const deleteUser=(id)=>{      
   const res=users.filter((user)=>user.id!=id)
     setusers(res)
  }


  const handleChange=(e)=>{
      setuser({
          ...user,
        [e.target.name]:e.target.value  
      })
  }


  const add=()=>{

    const newUser={
      id:users.length+1,
      name:user.name,
      phone:user.phone,
      email:user.email
    }
       setusers([newUser,...users])
  }


  return (
    <div className='container'>
      <h1 className='text-primary text-center'>Users tracker</h1>

      <div className="row mt-5">
      <div className="form-group col-md-6">
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder='name' name='name' />
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder="email" name='email' />
      <input className=' form-control mt-2' onChange={handleChange} type="text" placeholder="phone" name='phone' />
      <button className='btn btn-secondary form-control mt-2' onClick={add}>add</button>
      
      </div>
      
      
     <div className="col-md-5 card">
       {
       users.map((user)=>(
              <User data={user}  deletehandler={deleteUser}/>
       ))}
     </div>

     </div>
    </div>
  );
};

export default Users;
