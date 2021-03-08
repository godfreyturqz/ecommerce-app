import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer"
import { LocalStorage } from '../../services/localStorage'


const currentState = new LocalStorage().loadState() || {}

const store = createStore(rootReducer, currentState, compose(applyMiddleware(thunk)))

store.subscribe(() => {
    new LocalStorage().saveState(store.getState())
})

export default store
