//add the required properties to the object below for your order
const transientState = {
    "locationId": 0,
    "foodId": 0,
    "drinkId": 0,
    "dessertId": 0
}

//add the required setter functions to create your order
export const setLocation = (chosenLocation) => {
    transientState.locationId = chosenLocation;
    console.log(transientState)
}

export const setFood = (chosenFoodId) => {
    transientState.foodId = chosenFoodId
    console.log(transientState)
}

export const setDessert = (chosenDessertId) => {
    transientState.dessertId = chosenDessertId
    console.log(transientState)
}

export const setDrink = (chosenDrink) => {
    transientState.drinkId = chosenDrink
    console.log(transientState)
}

/*export const setOrder = (chosenOrder) => {
    transientState.orderId = chosenOrder
    console.log(transientState)
}*/



export const saveOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

}


  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions)
  const customEvent = new CustomEvent("newOrder")
  document.dispatchEvent(customEvent)
}
