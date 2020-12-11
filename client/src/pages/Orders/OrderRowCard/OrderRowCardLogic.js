import axios from 'axios'

function OrderRowCardLogic(props) {

    const handlePayment = async () => {
        const orderItems = props.orderItems.map(item => {
            return {
                name: item.name,
                price: String(item.price),
                quantity: String(item.quantity),
                sku: "item",
                currency: "USD"
            }
        })
        const totalPrice = String(props.totalPrice)
        const orderId = String(props._id)

        const {data} = await axios.post('/api/payment/paypal/create', {orderItems, totalPrice, orderId})
        window.location.assign(data.approval_url)
    }

    return { handlePayment }
}

export default OrderRowCardLogic
