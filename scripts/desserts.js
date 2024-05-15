//import { setDessert } from "./transientState.js"

// const dessertChangeHandler = (changeEvent) => {
//     if (changeEvent.target.id === "dessert") {
//        const chosenOption = changeEvent.target.value
//        console.log(parseInt(chosenOption))
//     }
//  }

export const dessertOptions = async () => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()


    let dessertHTML = ""

    dessertHTML += '<select id="dessert">'
    dessertHTML += '<option value="0">Select a dessert</option>'

    const arrayOfDesserts = desserts.map( (dessert) => {
            return `<option value="${dessert.id}">${dessert.name}</option>`
        }
    )

    dessertHTML += arrayOfDesserts.join("")
    dessertHTML += "</select>"
    return dessertHTML
}