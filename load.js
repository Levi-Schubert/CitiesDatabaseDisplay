//load database into JS from storage
const loadDatabase = function (localStorageKey){
	const databaseString = localStorage.getItem(localStorageKey)
	return JSON.parse(databaseString)
}

const citiesDatabase = loadDatabase("CitiesVisited")