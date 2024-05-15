import { setDrink } from "./TransientState.js"



export const DrinkOptions = async() => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()
    
    const handleDrinkChange = (changeEvent) => {
        if(changeEvent.target.id === 'drink') {
    
            let containerD = document.querySelector("#locationDrink")
    
            const drinkChoice = drinks.find(drink => parseInt(changeEvent.target.value) === drink.id)
            
            setDrink(drinkChoice.id)
    
            containerD.innerHTML = `Drink Choice: ${drinkChoice.name}`
        }
    
    }
    
    document.addEventListener("change", handleDrinkChange)

    let drinkChoicesHTML = ""

    drinkChoicesHTML += '<select id="drink" class="locationDrink">'
    drinkChoicesHTML += '<option value="0">Choose a Drink Option</option>'

    const arrayOfDrinks = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`

        }

    )
    
    drinkChoicesHTML += '<option value="5">None</option>'
    drinkChoicesHTML += '<div id="locationDrink"></div>'

    drinkChoicesHTML += arrayOfDrinks.join("")
    drinkChoicesHTML += "</select>"
    return drinkChoicesHTML
}