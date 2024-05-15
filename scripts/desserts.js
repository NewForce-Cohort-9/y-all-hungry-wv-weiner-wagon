import { setDessert } from "./transientState.js"

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
    dessertHTML += '<option value="5">None</option>'
    dessertHTML += arrayOfDesserts.join("")
    dessertHTML += "</select>"
    return dessertHTML
}

