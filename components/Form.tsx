"use client"
import { useState } from "react";
import "./styles/components.css"
import axios from "axios";
import { formTypes } from "@/config/types";


export default function Form({notify}:formTypes) {
  const [FormData, setData] = useState({ username: "", password: "" });
  const handleChange = (e:any) =>{
    const {name,value} = e.target
    setData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      const response = await axios.post("/api/newEntry",{username:FormData.username.toString(),password:FormData.password.toString()})
      notify(response.data.msg)
    }catch(error:any){
      console.log(error.message)
    }
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h5>Database Entry</h5>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="username" onChange={handleChange} value={FormData.username} required />
      <label htmlFor="password">Passowrd</label>
      <input type="password" name="password" placeholder="password" onChange={handleChange} value={FormData.password} required/>  
      <button type="submit">Submit</button> 
    </form>
  )
}
