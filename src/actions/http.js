import axios from 'axios'
const http = axios.create({
    /**BASE PARA EL CONSUMO DE API REST*/
    // baseURL: 'https://llama-camavilca.c9users.io/v1/'
    
    
    
    baseURL: 'http://localhost:8989/v1/'
    // baseURL: 'https://reactjsteachingproj.herokuapp.com/'
    
})
export default http;