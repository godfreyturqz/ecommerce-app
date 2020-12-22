import axios from 'axios'

export class ApiRequest {
    
    constructor(httpReqMethod, id = '', objectData = {}){
        this.API_URL = '/api'
        this.REACT_APP_CLOUDINARY_API_URL = process.env.REACT_APP_CLOUDINARY_API_URL
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    products(){
        return axios({
            url: `${this.API_URL}/products/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    orders(){
        return axios({
            url: `${this.API_URL}/orders/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    userOrders(){
        return axios({
            url: `${this.API_URL}/orders/user/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    signup(){
        return axios({
            url: `${this.API_URL}/signup`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    login(){
        return axios({
            url: `${this.API_URL}/login`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    uploadImage(data){
        return axios({
            url: `${this.API_URL}/upload`,
            method: 'POST',
            data: data
        })
    }

}
