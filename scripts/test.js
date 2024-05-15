//add the required properties to the object below for your order
const transientStateSubtotal = {
    "foodPrice": 0,
    "drinkPrice": 0,
    "dessertPrice": 0,
}



export const setFoodPrice = (chosenFoodId) => {
    transientStateSubtotal.dessertPrice = chosenFoodId
    console.log(transientStateSubtotal)
    newSubtotal()
}

export const setDessertPrice = (chosenDessertId) => {
    transientStateSubtotal.dessertId = chosenDessertId
    console.log(transientStateSubtotal)
    newSubtotal()
}

export const setDrinkPrice = (chosenDrink) => {
    transientStateSubtotal.drinkPrice = chosenDrink
    console.log(transientStateSubtotal)
    newSubtotal()
}



export const newSubtotal = async () => {
    let subtotal = transientStateSubtotal.foodPrice + transientStateSubtotal.dessertPrice + transientStateSubtotal.drinkPrice

    subtotal = subtotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    let insert = document.querySelector("#subtotal")

    insert.innerHTML = `Subtotal: ${subtotal}`
}