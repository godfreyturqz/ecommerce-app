import axios from 'axios'

export class HttpRequest {
    constructor(httpRequest, id = '', objectData = {}){
        this.httpRequest = httpRequest
        this.id = id
        this.objectData = objectData
    }

    products(){
        return axios({
            url: `/api/products/${this.id}`,
            method: this.httpRequest,
            data: this.objectData
        })
    }

    orders(){
        return axios({
            url: `/api/orders/${this.id}`,
            method: this.httpRequest,
            data: this.objectData
        })
    }

}