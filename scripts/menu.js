const locationTransientState = {
  "locationId": 0
}

const drinkResponse = await fetch("http://localhost:8088/locationDrinkMenu?_expand=drink")
const dessertResponse = await fetch("http://localhost:8088/locationDessertMenu?_expand=dessert")
const foodResponse = await fetch("http://localhost:8088/locationFoodMenu?_expand=food")

const drinkMenu = await drinkResponse.json()
const allDessertMenu = await dessertResponse.json()
const foodMenu = await foodResponse.json()


export const setLocationForMenu = (locationId) => {
  locationTransientState.locationId = locationId
  // setDrinkMenu()
  setDessertMenu()
  // setFoodMenu()
}

const setDessertMenu = () => {
  let dessertMenu = []
  for (const dessert of allDessertMenu) {
    dessertMenu.push(dessert)
  }
  dessertMenu = dessertMenu.filter(dessert => dessert.locationId === locationTransientState.locationId)

  let dessertDropdown = document.querySelector("#dessert")
  console.log(allDessertMenu)
  console.log(dessertMenu)

  let dropdownHTML = `<option value="0">Select a dessert</option>`

  dessertMenu.forEach(dessert => {
    dropdownHTML += `<option value="${dessert.id}">${dessert.name}</option>`
  });

  dropdownHTML.join("")

  return dessertDropdown = dropdownHTML
}
