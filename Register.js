import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from '../redux/userActions';
import './../App.css';

function SignIn(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const {loading, userInfo, error} = useSelector(state => state.userRegister)
    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            props.history.push('/')
        }
    }, [userInfo, props.history])

    function submitHandler(e){
        e.preventDefault()
        dispatch(signIn(email, password))
    }


    return (
            loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Sign in</h3>
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Log in</button>
                        </li>
                        <li>
                            New here?
                        </li>
                        <li>
                            <Link to="/register" className="button full-width">Create an account</Link>
                        </li>
                    </ul>
                </form>
           
            </div> 
    )
}

export default SignIn
