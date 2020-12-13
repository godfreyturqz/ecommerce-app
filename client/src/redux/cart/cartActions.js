import { LocalStorage } from '../../services/LocalStorage'

const localStr = new LocalStorage()

export const addToCart = (productId, quantity) => {

    const data = localStr.getProductStorage(productId)
    if (data === null) return
    

    return {
        type: 'ADD_TO_CART_SUCCESS',
        payload: {
            productId: data._id,
            mainCategory: data.mainCategory,
            subCategory: data.subCategory,
            brand: data.brand,
            name: data.name,
            image: data.image,
            price: data.price,
            quantity: quantity
        }
    }
}

export const removeFromCart = (productId) => {
    return {type: 'REMOVE_FROM_CART', payload: productId}
}
