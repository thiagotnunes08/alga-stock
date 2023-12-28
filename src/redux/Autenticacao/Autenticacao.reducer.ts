import { Action } from ".."
import {User} from "../../service/Autenticacao.service"

declare interface AuthenticationState {
    profile?:User
}


export default function(state:AuthenticationState = {},action:Action){
    switch(action.type){
        case 'AUTHENTICATION_LOGIN':
         return {profile:action.payload}

        case 'AUTHENTICATION_LOGOUT':
         return {} 

        default:
            return state
    }
}