export const checkLocalStorageExpiration = (key) => {
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