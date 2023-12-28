import http from '../utils/http'


export interface User {
    _id:string
    user:string
    email:string
    token:string
    role:'admin' | 'customer'
    createdAt:string
    updatedAt:string

}

export const logaUser = (user:string,pass:string) => 
    http.post<User>('authentication/login',{user,pass})
    .then(response => response.data)

export default User