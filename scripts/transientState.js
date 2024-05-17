//add the required properties to the object below for your order
export const transientState = {
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
    const customEvent = new CustomEvent("newDrink")
    document.dispatchEvent(customEvent)
}

/*export const setOrder = (chosenOrder) => {
    transientState.orderId = chosenOrder
    console.log(transientState)
}*/
// export const subtotal = (transientState) =


export const saveOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

}

  if (transientState.locationId === 0 || transientState.foodId === 0 || transientState.drinkId === 0 || transientState.dessertId === 0) {
    window.alert("You must select a pickup location, food, drink, and dessert to complete your order!")
    return
  }

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions)
  const orderId = await response.json()

  const fetchResponse = await fetch("http://localhost:8088/locations")
  const locations = await fetchResponse.json()

  const location = locations.find(location => location.id === transientState.locationId)

  const total = document.querySelector("#total")

  console.log(total.innerHTML)

  const changeHead = document.querySelector("#orderHead")
  changeHead.innerHTML = `Order Up!`

  const orderBottom = document.querySelector("#orderBottom")
  orderBottom.innerHTML = `<h5>Your order has been placed at the ${location.name} Location!</h5>
                           <div>Order Number: ${orderId.id}, Order ${total.innerHTML}</div>
                           <button id='newOrder'>Place Another Order</button>`

  const customEvent = new CustomEvent("newOrder")
  document.dispatchEvent(customEvent)
}

