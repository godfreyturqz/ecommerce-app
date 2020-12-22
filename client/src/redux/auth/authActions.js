import { ApiRequest } from '../../services/ApiRequest'


export const isAuth = () => async (dispatch) => {
    try {
        const {data} = await new ApiRequest().isAuth()
        dispatch({type: 'USER_AUTH_SUCCESS', payload: data.userId})

    } catch (error) {
        dispatch({type: 'USER_AUTH_FAIL', payload: error.message})
    }
}

export const userLogout = () => {
    try {
        new ApiRequest().logout()
        return {type: 'USER_LOGOUT'}
    } catch (error) {
        console.log(error)
    }
}
