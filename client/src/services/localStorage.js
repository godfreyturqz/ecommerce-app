export class LocalStorage {

	constructor(){
		this.state = 'state'
		this.productStrKey = 'products'
		this.cartStrKey = 'cart'
		this.maxAge = new Date().getTime() + 86400000
	}

	isStorageExpired(key){
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

	loadState(){
		try {
			const serializedState = localStorage.getItem(this.state)
			if (serializedState === null) return undefined

			const item = JSON.parse(serializedState)
			const now = new Date()

			if (now.getTime() > item.maxAge) {
				localStorage.removeItem(this.state)
				return null
			}

			return JSON.parse(serializedState).value
		} catch (error) {
			return null
		}
	}

	saveState(value){
		const item = {
			value: value, 
			maxAge: this.maxAge
		}
		try {
			const serializedState = JSON.stringify(item)
			localStorage.setItem(this.state, serializedState)
		} catch (error) {
			console.log(error)
		}
	}

	setProductStorage(data){
		const item = {
			value: data, 
			maxAge: this.maxAge
		}
	
		return localStorage.setItem(this.productStrKey, JSON.stringify(item))
	}

	getProductStorage(productId){
		const itemStr = localStorage.getItem(this.productStrKey)
		if (!itemStr) return null
	
		return JSON.parse(itemStr).value.find(product => product._id === productId)
	}

}
