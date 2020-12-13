export class LocalStorage {

	constructor(){
		this.productStrKey = 'products'
		this.cartStrKey = 'cart'
		this.maxAge = new Date().getTime() + 86400000
	}

	isStorageExpired = (key) => {
		const itemStr = localStorage.getItem(key)
		if (!itemStr) return null
	
		const item = JSON.parse(itemStr)
		const now = new Date()
	
		if (now.getTime() > item.maxAge) {
			localStorage.removeItem(key)
			return null
		}
	
		return item.value
	}

	setProductStorage = (data) => {
		const item = {
			value: data, 
			maxAge : this.maxAge
		}
	
		return localStorage.setItem(this.productStrKey, JSON.stringify(item))
	}

	getProductStorage = (productId) => {
		const itemStr = localStorage.getItem(this.productStrKey)
		if (!itemStr) return null
	
		return JSON.parse(itemStr).value.find(product => product._id === productId)
	}

	setCartStorage = (data) => {
		const item = {
			value: data,
			maxAge: this.maxAge
		}
		return localStorage.setItem(this.cartStrKey, JSON.stringify(item))
	}

	getCartStorage = (productId) => {
		const itemStr = localStorage.getItem(this.cartStrKey)
		if (!itemStr) return null

		return JSON.parse(itemStr).value.find(product => product._id === productId)
	}

}
