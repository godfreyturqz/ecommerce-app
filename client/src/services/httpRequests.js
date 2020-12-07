import axios from 'axios'

export const httpReqProducts = (httpRequest, id = '', objectData = {}) => {
    const config = {
        url: `/api/products/${id}`,
        method: httpRequest,
        data: objectData
    }
    return axios(config)
}

export const httpReqOrders = (httpRequest, id = '', objectData = {}) => {
    const config = {
        url: `/api/orders/${id}`,
        method: httpRequest,
        data: objectData
    }
    return axios(config)
}
