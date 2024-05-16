//add the required properties to the object below for your order
const transientStateSubtotal = {
    "foodPrice": 0,
    "drinkPrice": 0,
    "dessertPrice": 0,
}



export const setFoodPrice = (chosenFood) => {
    transientStateSubtotal.foodPrice = chosenFood
    console.log(transientStateSubtotal)
    newSubtotal()
}

export const setDessertPrice = (chosenDessert) => {
    transientStateSubtotal.dessertPrice = chosenDessert
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

    let tax = subtotal * 0.06

    let total = subtotal + tax

    subtotal = subtotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    tax = tax.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    total = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    let subtotalHTML = document.querySelector("#subtotal")
    let taxHTML = document.querySelector("#tax")
    let totalHTML = document.querySelector("#total")

    subtotalHTML.innerHTML = `Subtotal: ${subtotal}`
    taxHTML.innerHTML = `Tax: ${tax}`
    totalHTML.innerHTML = `Total: ${total}`
}
