import React from "react";
import './Home.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { toast }from 'react-toastify'
import { addContact } from "../redux/action";

const AddContact = () => {
  const contacts = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch()
  const history =  useNavigate()
 
  console.log(contacts);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  
  const handleSubmit=(e)=>{
   e.preventDefault();

   const checkEmail= contacts.find(
    (contact)=>contact.email === email && contact
   )
   const checkNumber= contacts.find(
    (contact)=>contact.number === parseInt(number)
   )

   if( !email|| !number || !name){
    return  toast.dark("please fill the field !");
   }


   if(checkEmail){
    return toast.dark("This email is already existing")
   }
   
   if(checkNumber){
    return toast.dark("This Number is already existing")
   } 

   if(number.length<10){
     return toast.dark("This Number is lesser than 10 digits")
   }


   const data={
    id:(contacts.length) ? contacts[contacts.length-1].id+1 : 0,
    name,
    email,
    number
   } 

   dispatch(addContact(data));
   toast.success("Student added succesfully !!");
   history("/");
  }

  return (
    <div className="container-fluid ">
      <h1 className=" heading display-3  text-center  ">Add Student</h1>
      <div className="row">
        <div className="main  col-md-6  mx-auto p-5 mb-5 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <input
                type="submit"
                value="Add Stundent"
                className="btn btn-block btn-dark"
              />
              <Link to="/" className="btn btn-danger ms-3">
                    Cancel
                  </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
