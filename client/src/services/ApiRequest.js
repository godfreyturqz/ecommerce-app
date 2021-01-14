import axios from 'axios'

export class ApiRequest {
    
    constructor(httpReqMethod, id = '', objectData = {}){
        this.API_BASE_URL = '/api/v1'
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    products(){
        return axios({
            url: `${this.API_BASE_URL}/products/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    orders(){
        return axios({
            url: `${this.API_BASE_URL}/orders/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    userOrders(){
        return axios({
            url: `${this.API_BASE_URL}/orders/user/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    uploadImage(data){
        return axios.post(`${this.API_BASE_URL}/upload`, data)
    }

    signup(data){
        return axios.post(`${this.API_BASE_URL}/signup`, data)
    }

    login(data){
        return axios.post(`${this.API_BASE_URL}/login`, data)
    }

    logout(){
        return axios.get(`${this.API_BASE_URL}/logout`)
    }

    isAuth(){
        return axios.get(`${this.API_BASE_URL}/isAuth`)
    }

}
