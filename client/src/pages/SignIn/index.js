import './styles.css';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { signIn } from '../redux/user/userActions';
// import { useSelector, useDispatch } from "react-redux";

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function submitHandler(e){
        e.preventDefault()
        // dispatch(signIn(email, password))
    }


    return (
            // loading ? <div>Loading...</div> :
            // error ? <div>{error}</div> :
            <form onSubmit={submitHandler}>
                <h1>Sign-in</h1>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="off"/>

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off"/>

                <button type="submit" className="button primary">Log in</button>

                <p>New here?</p>
                <div>
                    <Link to="/">Create an account</Link>
                </div>
            </form>
    )
}

export default SignIn
