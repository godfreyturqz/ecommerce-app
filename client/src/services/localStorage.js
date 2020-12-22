export class LocalStorage {

	constructor(){
		this.stateLocalKey = 'state'
		this.maxAge = new Date().getTime() + 86400000
	}

	saveState(value){
		try {
			const localState = {value, maxAge: this.maxAge}
			const serializedState = JSON.stringify(localState)
			localStorage.setItem(this.stateLocalKey, serializedState)
			
		} catch (error) {
			console.log(error)
		}
	}

	loadState(){
		try {
			const serializedState = localStorage.getItem(this.stateLocalKey)
			if (serializedState === null) return null

			const item = JSON.parse(serializedState)
			const now = new Date()

			if (now.getTime() > item.maxAge) {
				localStorage.removeItem(this.stateLocalKey)
				return null
			}

			return JSON.parse(serializedState).value

		} catch (error) {
			console.log(error)
		}
	}

}
