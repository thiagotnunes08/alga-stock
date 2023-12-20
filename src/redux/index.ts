import {legacy_createStore as createStore, combineReducers,compose,applyMiddleware} from 'redux'
import Products from './Produtos/Produtos.reducer'
import thunk,{ThunkAction} from 'redux-thunk'

const reducers = combineReducers({
    products: Products
})



const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
  
    
    ))

    export declare interface Action<T = any> {
        type: string
        payload?: T
    }

    export type RootState = ReturnType<typeof reducers>

    export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

    export type Thunk<T = any> =
    ThunkAction<void,RootState,unknown,Action<T>>

    export default store