import { setFoodPrice } from "./subtotal.js"
import { setFood, transientState } from "./transientState.js"

let chosenLocationId = 0

const handleLocationChangeForFood = (change) => {
    if(change.target.id === 'locationDropdown') {
   transientState.locationId = chosenLocationId;
        const customEventFoods = new CustomEvent("newLocationSelectedFoods");
        document.dispatchEvent(customEventFoods)
    }
}

export const foodChoices = async () => {
  const response = await fetch("http://localhost:8088/foods")
  const foods = await response.json()
  const locationFoodResponse = await fetch("http://localhost:8088/locationFoodMenu?_expand=food")
    const locationFoods = await locationFoodResponse.json()


  const handleFoodChange = (changeEvent) => {
    if (changeEvent.target.id === 'food') {

        let containerF = document.querySelector("#locationFood")
  
        const foodChoice = foods.find(food => parseInt(changeEvent.target.value) === food.id)
  
        setFood(foodChoice.id)
        setFoodPrice(foodChoice.price)

        container.innerHTML = `<img src="${food?.image}"`>`Food Choice: ${foodChoice.name}`
  
    }

  }
  document.addEventListener ("change", handleLocationChangeForFood)
  document.addEventListener("change", handleFoodChange)

  const locationFoodChoice = locationFoods.filter(singleFood => transientState.locationId === singleFood.locationId)
  
  let foodHTML = " "

  foodHTML += '<select id="food">'
  foodHTML += '<option value="0">Select A Food</option>' 

const foodsArray = locationFoodChoice.map( (food) => {
    return `<option value="${food?.food.id}">${food?.food.name} - qty: ${food.quantity}</option>`
  }

)

foodHTML += '<option value="6">None</option>'

foodHTML += foodsArray.join(" ")
foodHTML += "</select>"

return foodHTML

}