import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer"
import { LocalStorage } from '../../services/localStorage'

const localStr = new LocalStorage()
const persistedState = localStr.loadState() || {}

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunk)))

store.subscribe(() => {
    localStr.saveState(store.getState())
})

export default store
