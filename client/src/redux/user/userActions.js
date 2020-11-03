import axios from "axios";
import Cookie from "js-cookie";

export function signIn(email, password){
    return async function(dispatch){
        try {
            dispatch({type: 'USER_SIGNIN_REQUEST', payload: {email, password}})
            const {data} = await axios.post('/api/users/signin', {email, password})
            dispatch({type: 'USER_SIGNIN_SUCCESS', payload: data})
            Cookie.set('userInfo', JSON.stringify(data))
        } catch (error) {
            console.log(error)
            dispatch({type: 'USER_SIGNIN_FAIL', payload: error.message})
        }
    }
}