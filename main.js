const citiesRef = document.querySelector("#cities")
const fragment = document.createDocumentFragment()

const cityDomBuilder = (year) => {


	citiesDatabase.cities.forEach(currentCity => {
		
		// city, img, year visited, attractions

		if (!year || year ==  currentCity.year){

			const citySection = document.createElement("span")
			let cont = currentCity.continent //get continent to add to add class for styling
			citySection.classList = ("bordered city " + cont)


			const cityName = document.createElement("h2")
			cityName.classList = "city__name"
			cityName.textContent = currentCity.name
			citySection.appendChild(cityName)

			const cityImage = document.createElement("img")
			cityImage.classList = "city__image"
			cityImage.src = currentCity.image
			citySection.appendChild(cityImage)

			const cityYearVisited = document.createElement("h4")
			cityYearVisited.classList = "city__year"
			cityYearVisited.textContent = currentCity.year
			citySection.appendChild(cityYearVisited)
			
			const cityAttractionsHeading = document.createElement("h4")
			cityAttractionsHeading.classList = "city__heading"
			cityAttractionsHeading.textContent = "Attractions"
			citySection.appendChild(cityAttractionsHeading)

			const cityAttractionsList = document.createElement("ol")
			cityAttractionsList.classList = "city__attractions_list"

			currentCity.attractions.forEach(iter => {
				const cityAttractionsListItem = document.createElement("li")
				cityAttractionsListItem.classList = "city_attractions_list_item"
				cityAttractionsListItem.textContent = iter
				cityAttractionsList.appendChild(cityAttractionsListItem)
			});

			citySection.appendChild(cityAttractionsList)
			fragment.appendChild(citySection)
		}

	});

	citiesRef.appendChild(fragment)

}


// continent codes
// North America 	= NA
// South America 	= SA
// Asia 			= AS
// Antarctica		= AN
// Europe			= EU
// Africa			= AF
// Australia		= AU

//allows user to filter without editing the script
let arg = prompt("Enter a year to filter by or leave blank for all cities.")
//Argument of year visitied or blank for all
cityDomBuilder(arg)