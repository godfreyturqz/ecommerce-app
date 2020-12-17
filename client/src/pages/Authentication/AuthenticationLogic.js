import { useState } from 'react'
import { useLocation } from "react-router-dom"
import { ApiRequest } from '../../services/ApiRequests'


const AuthenticationLogic = () => {

    const [user, setUser] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({email: '', password: ''})
    const currentUrl = useLocation()


    const handleInputs = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = currentUrl.pathname === '/register' ?
                            await new ApiRequest('POST', '', user).signup() :
                            await new ApiRequest('POST', '', user).login()
            // if success, data returns a userId - check variable in backend authcontroller
            if(data){
                setUser({email: '', password:''})
                window.location.assign('/profile')
            }
        } catch (error) {
            const err = Object.values(error)[2].data.errors 
            if(err) setErrors({email: err.email, password: err.password})
        }
    }

    
    return {
        user, 
        handleInputs, 
        handleSubmit, 
        errors,
        currentUrl
    }
}

export default AuthenticationLogic
