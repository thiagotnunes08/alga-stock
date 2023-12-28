import {legacy_createStore as createStore, combineReducers,compose,applyMiddleware} from 'redux'
import Products from './Produtos/Produtos.reducer'
import thunk,{ThunkAction} from 'redux-thunk'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AutenticacaoReducer from './Autenticacao/Autenticacao.reducer'

const reducers = combineReducers({
    products: Products,
    authentication: AutenticacaoReducer
})

const persistedReducer = persistReducer({
    key:'algastock',
    storage,
    blacklist:['products']

}, reducers)

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk)
    ))
    
    const persistor = persistStore(store)

    export declare interface Action<T = any> {
        type: string
        payload?: T
    }

    export type RootState = ReturnType<typeof reducers>

    export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

    export type Thunk<T = any> =
    ThunkAction<void,RootState,unknown,Action<T>>

    export {store,persistor}