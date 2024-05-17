import { setDrink, transientState, changeQty } from "./transientState.js"
import { setDrinkPrice } from "./subtotal.js"

let chosenLocationId = 0

const handleLocationChangeForDrink = (change) => {
    if(change.target.id === 'locationDropdown') {
   chosenLocationId = transientState.locationId;
        const customEventDrinks = new CustomEvent("newLocationSelectedDrinks");
        document.dispatchEvent(customEventDrinks)
    }
}

export const DrinkOptions = async() => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()
    const locationDrinkResponse = await fetch("http://localhost:8088/locationDrinkMenu?_expand=drink")
    const locationDrinks = await locationDrinkResponse.json()
    const orderResponse = await fetch("http://localhost:8088/orders")
    const orders = await orderResponse.json()
    
    const handleDrinkChange = (changeEvent) => {
        if(changeEvent.target.id === 'drink') {
    
            let containerD = document.querySelector("#locationDrink")
    
            const drinkChoice = drinks.find(drink => parseInt(changeEvent.target.value) === drink.id)
            
            setDrink(drinkChoice.id)
            setDrinkPrice(drinkChoice.price)
    
            containerD.innerHTML = `<img class="pic" src="${drinkChoice.image}">${drinkChoice.name}`
        }
    
    }
    const reduceQty = () => {

  for(const singleDrink of locationDrinks){
    for (const singleOrder of orders){

        if(singleDrink.Id === singleOrder.drinkId){
    
            changeQty("locationDrinkMenu", singleDrink.quantity -= 1)
        }
    }
  }

    }
    
    document.addEventListener("change", handleDrinkChange)
    document.addEventListener("change", handleLocationChangeForDrink)

    document.addEventListener("newOrder", reduceQty)
    const locationDrinkChoice = locationDrinks.filter(singleDrink => transientState.locationId === singleDrink.locationId)

    let drinkChoicesHTML = ""

    drinkChoicesHTML += '<select class="btn btn-info" id="drink">'
    drinkChoicesHTML += '<option value="0">Select a Drink</option>'

    const arrayOfDrinks = locationDrinkChoice.map( (drink) => {
            return `<option value="${drink?.drink.id}">${drink?.drink.name} - qty: ${drink.quantity}</option>`

        }

    )
    
    drinkChoicesHTML += '<option value="5">None</option>'
    
    drinkChoicesHTML += arrayOfDrinks.join("")
    drinkChoicesHTML += "</select>"

    return drinkChoicesHTML
}