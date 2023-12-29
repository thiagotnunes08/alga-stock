import { Thunk } from "..";
import { logaUser } from "../../service/Autenticacao.service";

declare interface Credentials {

    user:string,
    pass:string
}

export const login =
 ({user,pass}:Credentials): Thunk =>
  async (dispatch) => {
    const loggedInUser = await logaUser(user,pass)
    dispatch({
        type:'AUTHENTICATION_LOGIN',
        payload:loggedInUser
    })
}

export const logOut = () => ({

    type:'AUTHENTICATION_LOGOUT'
})