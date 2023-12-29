import axios from "axios";
import { store } from "../redux";



const http = axios.create({
    baseURL: 'https://jovial-nasturtium-b272ac',
    headers: {
      authorization: 'Bearer 123'
    }
  })

  http.interceptors.request.use((config) => {

    const token = store.getState().authentication.profile?.token

    if(token)
    config.headers.Authorization = `Bearer ${token}`

    return config


  })
  
  export default http