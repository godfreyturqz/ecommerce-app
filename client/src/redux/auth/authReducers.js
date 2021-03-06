const initialState = {
    loading: false,
    isAuth: false,
    userId: '', 
    error: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_AUTH_SUCCESS':
            return {
                isAuth: true,
                userId: action.payload,
                error: ''
            } 
        case 'USER_AUTH_FAIL':
            return {
                isAuth: false,
                userId: '',
                error: action.payload
            } 
        case 'USER_LOGOUT':
            return {
                isAuth: false,
                userId: '',
                error: ''
            }
        default: return state
    }
}
