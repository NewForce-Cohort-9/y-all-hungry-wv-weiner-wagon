import { setFoodPrice } from "./subtotal.js"
import { setFood, transientState, changeQty } from "./transientState.js"

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
    const orderResponse = await fetch("http://localhost:8088/orders")
    const orders = await orderResponse.json()


  const handleFoodChange = (changeEvent) => {
    if (changeEvent.target.id === 'food') {

        let containerF = document.querySelector("#locationFood")
  
        const foodChoice = foods.find(food => parseInt(changeEvent.target.value) === food.id)
  
        setFood(foodChoice.id)
        setFoodPrice(foodChoice.price)

        containerF.innerHTML = `<img class="pic" src="${foodChoice.image}">${foodChoice.name}`
  
    }

  }

  const reduceQty = () => {
    for(const singleFood of locationFoods) {
        if(transientState.locationId == singleFood.locationId && transientState.foodId == singleFood.foodId){
            let foodQty = singleFood.quantity - 1
          changeQty("locationFoodMenu", foodQty, singleFood.id)
        }
    }

  }
  
  document.addEventListener("change", handleFoodChange)
  //document.addEventListener ("change", handleLocationChangeForFood)

  document.addEventListener("newOrder", reduceQty)

  const locationFoodChoice = locationFoods.filter(singleFood => transientState.locationId === singleFood.locationId)
  
  let foodHTML = " "

  foodHTML += '<select class="btn btn-info" id="food">'
  foodHTML += '<option value="0">Select A Food</option>' 

const foodsArray = locationFoodChoice.map( (food) => {
    return `<option value="${food?.food.id}">${food?.food.name} - qty: ${food.quantity}</option>`
  }

)



foodHTML += foodsArray.join(" ")
foodHTML += "</select>"

return foodHTML

}


