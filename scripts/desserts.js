import { setDessertPrice } from "./subtotal.js"
import { setDessert } from "./transientState.js"

export const dessertOptions = async () => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()

    const handleDessertChange = (changeEvent) => {
        if(changeEvent.target.id === 'dessert') {
            
            let container = document.querySelector("#locationDessert")
            //const locationId = document.querySelector(#locationId)
            //console.log(locationId.value)
            const dessertChoice = desserts.find(dessert => parseInt(changeEvent.target.value) === dessert.id)
            
            setDessert(dessertChoice.id)
            setDessertPrice(dessertChoice.price)
    
            container.innerHTML = `Dessert Choice: ${dessertChoice.name}`
            // container.innerHTML = `div id=locationId` VALUE %{VALUE.ID}
            container.innerHTML = `${dessertChoice.name}`
        }
    
    }
    
    document.addEventListener("change", handleDessertChange)


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

// let chosenLocationId = 0;
// const handlelcoationchangeforfoods = (change) => {
//     if (change.taRGET.id === 'lcoation'){
//         chosenlocationId = parseInt(change.target.value)
//         foodsAvailable();


//     }
// }