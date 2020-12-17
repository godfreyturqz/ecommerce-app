import React from 'react'
import './styles.css';
import AuthenticationLogic from "./AuthenticationLogic";
import { Link } from "react-router-dom";


function Authentication(props) {
    
    const {
        user, 
        handleInputs, 
        handleSubmit, 
        errors, 
        currentUrl
    } = AuthenticationLogic(props)


    return (
        <form onSubmit={handleSubmit}>
            <h1>{ currentUrl.pathname === '/register' ? 'Create an Account' : 'Sign in to continue' }</h1>

            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleInputs} autoComplete="off"/>
            <p className="error-message">{errors.email}</p>

            <label>Password</label>
            <input type="password" name="password" value={user.password} onChange={handleInputs}/>
            <p className="error-message">{errors.password}</p>
            {
                currentUrl.pathname === '/register'
                ? 
                <>
                    <button type="submit" className="button primary">Create Account</button>
                    <p>Already have an account?</p>
                    <div>
                        <Link to="/signin">Sign-in here</Link>
                    </div>
                </>
                
                : 
                <>
                    <button type="submit" className="button primary">Sign in</button>
                    <p>New here?</p>
                    <div>
                        <Link to="/register">Create an account</Link>
                    </div>
                </>
            }
        </form>
    )
}

export default Authentication
