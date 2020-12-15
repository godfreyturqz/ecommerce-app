import axios from 'axios'

export class ApiRequest {
    constructor(httpReqMethod, id = '', objectData = {}){
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    products(){
        return axios({
            url: `/api/products/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    orders(){
        return axios({
            url: `/api/orders/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

    userOrders(){
        return axios({
            url: `/api/orders/user/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        })
    }

}
