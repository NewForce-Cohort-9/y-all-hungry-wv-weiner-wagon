import { setDessertPrice } from "./subtotal.js"
import { setDessert, transientState } from "./transientState.js"

let chosenLocationId = 0

const handleLocationChangeForDessert = (change) => {
    if(change.target.id === 'locationDropdown') {
   chosenLocationId = transientState.locationId;
        const customEventDesserts = new CustomEvent("newLocationSelectedDesserts");
        document.dispatchEvent(customEventDesserts)
    }
}

export const dessertOptions = async () => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()
    const locationDessertResponse = await fetch("http://localhost:8088/locationDessertMenu?_expand=dessert")
    const locationDesserts = await locationDessertResponse.json()

    const handleDessertChange = (changeEvent) => {
        if(changeEvent.target.id === 'dessert') {
            
            let container = document.querySelector("#locationDessert")
            
            const dessertChoice = desserts.find(dessert => parseInt(changeEvent.target.value) === dessert.id)
            
            setDessert(dessertChoice.id)
            setDessertPrice(dessertChoice.price)
            
    
            container.innerHTML = `<img class="pic" src="${dessertChoice.image}"> ${dessertChoice.name}`
            
            // container.innerHTML = `${locationDesserts.dessert.name}
            // ${locationDesserts.quantity}` 
            // console.log(locationDesserts)
        }   
    
    }

    document.addEventListener("change", handleDessertChange)
    document.addEventListener("change", handleLocationChangeForDessert)

    const locationDessertChoice =  locationDesserts.filter(singleDessert => transientState.locationId === singleDessert.locationId)

    let dessertHTML = ""

    dessertHTML += '<select id="dessert">'
    dessertHTML += '<option value="0">Select a dessert</option>'

    const arrayOfDesserts = locationDessertChoice.map( (dessert) => {
            return `<option value="${dessert?.dessert.id}">${dessert?.dessert.name} - qty: ${dessert.quantity}</option>`
        }
    )
    dessertHTML += '<option value="5">None</option>'
    dessertHTML += arrayOfDesserts.join("")
    dessertHTML += "</select>"
    return dessertHTML
}
