import './styles.css';
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e){
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Create an Account</h1>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="off" required/>

            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off" required/>

            <button type="submit" className="button primary">Sign up</button>

            <p>Already have an account?</p>
            <div>
                <Link to="/signin">Sign-in here</Link>
            </div>
        </form>
    )
}

export default Register