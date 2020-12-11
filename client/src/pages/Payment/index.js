import axios from 'axios'

function Payment(props) {

    const orderId = props.match.params.id
    const data = {
        paymentId: new URLSearchParams(props.location.search).get('paymentId'),
        PayerID: new URLSearchParams(props.location.search).get('PayerID'),
        totalPrice: new URLSearchParams(props.location.search).get('totalPrice'),
        orderId: orderId
    }

    if(orderId && data.paymentId){
        axios.post('/api/payment/paypal/execute', data)
        .then(()=> props.history.push(`/order/details/${orderId}`))
    } else {
        props.history.push('/')
    }

    return null
}

export default Payment
