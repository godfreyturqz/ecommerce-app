export const isStorageExpired = (key) => {
	const itemStr = localStorage.getItem(key)
	if (!itemStr) return null

	const item = JSON.parse(itemStr)
	const now = new Date()

	if (now.getTime() > item.maxAge) {
		console.log(now.getTime() - item.maxAge)
		localStorage.removeItem(key)
		return null
	}

	return item.value
}

export const setProductStorage = (data) => {
	const item = {
		value: data, 
		maxAge : new Date().getTime() + 86400000
	}

	return localStorage.setItem("products", JSON.stringify(item))
}

export const getProductStorage = (productId) => {
	const itemStr = localStorage.getItem("products")
	if (!itemStr) return null

	return JSON.parse(itemStr).value.find(product => product._id === productId)
}