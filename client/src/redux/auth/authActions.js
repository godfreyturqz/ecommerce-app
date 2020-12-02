import axios from "axios";

export const userAuth = () => async(dispatch) => {
    
        try {
            axios.get('/api/requireAuth')
            .then(({data})=> {
                dispatch({type: 'USER_AUTH_SUCCESS', payload: data.userId})
            })
            .catch((error)=> console.log(error))
        
        } catch (error) {
            dispatch({type: 'USER_AUTH_FAIL', payload: error.message})
        }

}

export const userLogout = () => (dispatch) => {
    axios.get('/api/logout')
      .then( data => {
        console.log(data)
        dispatch({type: 'USER_LOGOUT'})
      })
      .catch(error => console.log(error))
}