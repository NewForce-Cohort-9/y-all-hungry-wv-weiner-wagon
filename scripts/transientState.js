//add the required properties to the object below for your order
export const transientState = {
    "locationId": 0,
    "foodId": 0,
    "drinkId": 0,
    "dessertId": 0,
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


//set quantity with PUT method by subtracting one from joined tables when order is complete
export const changeQty = async (correctTable, quantity) => {

    const qtyPut = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({quantity: quantity})
    }

    const response = await fetch(`http://localhost:8088/${correctTable}`, qtyPut)
    const newQuantity = response.json()
    const customEvent = new CustomEvent("newQuantity")
    document.dispatchEvent(customEvent)
}

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
  const orderId = await response.json()

  const total = document.querySelector("#total")

  console.log(total.innerHTML)

  const changeHead = document.querySelector("#orderHead")
  changeHead.innerHTML = `Order Up!`

  const orderBottom = document.querySelector("#orderBottom")
  orderBottom.innerHTML = `<h3>Your order has been placed!</h3>
                           <div>Order Number: ${orderId.id}, Order ${total.innerHTML}</div>
                           <button id='newOrder'>Place Another Order</button>`

  const customEvent = new CustomEvent("newOrder")
  document.dispatchEvent(customEvent)
}

