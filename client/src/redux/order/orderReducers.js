export function orderReducer(state= { loading: false, data: {}, error: '' }, action){
    switch(action.type){
        case 'CREATE_ORDER_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'CREATE_ORDER_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'CREATE_ORDER_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            }

        default: return state
    }
}