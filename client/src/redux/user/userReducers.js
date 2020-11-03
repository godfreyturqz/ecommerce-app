const userSignInState= {
    loading: false,
    userInfo: {},
    error: ''
}
export function userSignInReducer(state= userSignInState, action){
    switch(action.type){
        case 'USER_SIGNIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'USER_SIGNIN_SUCCESS':
            return {
                loading: false,
                userInfo: action.payload,
                error: ''
            } 
        case 'USER_SIGNIN_FAIL':
            return {
                loading: false,
                userInfo: {},
                error: action.payload
            } 
        default: return state
    }
}