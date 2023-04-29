"use client"; // this is a client component 👈🏽

import React,{useState} from 'react'
import '../login.css'
import Link from 'next/link'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [confirmPassword,setConfirmPassword] = useState(undefined);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <>
        <div className='register-container'>

        <div className="form">
            <div className="form-body">
                <div><h2 className="register_name"> Register Here</h2></div>
                <div className="username">
                    <label  htmlFor="firstName">First Name </label><br/> 
                    <input  type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Enter Your First Name"/><br/><br/>
                </div>
                <div className="lastname">
                    <label  htmlFor="lastName">Last Name </label><br/>
                    <input  type="text" name="lastname" id="lastName" value={lastName}   onChange = {(e) => handleInputChange(e)} placeholder="Enter Your last Name"/><br/><br/>
                </div>
                <div className="email">
                    <label  htmlFor="email">Email </label><br/> 
                    <input  type="email" id="email"  value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Email"/><br/><br/>
                </div>
                <div className="password">
                    <label  htmlFor="password">Password </label> <br/>
                    <input  type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Password"/><br/><br/>
                </div>
                <div className="confirm-password">
                    <label  htmlFor="confirmPassword">Confirm Password </label> <br/>
                    <input  type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Confirm Password"/><br/><br/>
                </div>
            </div>
            <div className="footer">
                <div className='take-to-login'>Already have a account? <Link href="/login"> signin here </Link></div>
                <button onClick={()=>handleSubmit()} type="submit" className="register_btn">Register</button>
            </div>
        </div>
        </div>
        </>
  )
}

export default Register;