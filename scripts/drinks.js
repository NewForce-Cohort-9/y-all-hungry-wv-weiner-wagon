import { setDrink } from "./TransientState.js"

const handleDrinkChange = (changeEvent) => {
    if(changeEvent.target.id === 'drink') {

        const containerD = document.querySelector("#locationDrink")

        const drink = drinks.find(drink => parseInt(changeEvent.target.value) === drink.id)
        
        setDrink(drink.id)

        containerD.innerHTML = `Drink Choice: ${drink.name}`
    }

}


export const DrinkOptions = async() => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()

    
    document.addEventListener("change", handleDrinkChange)

    let drinkChoicesHTML = ""

    drinkChoicesHTML += '<select id="drink" class="locationDrink">'
    drinkChoicesHTML += '<option value="0">Choose a Drink Option</option>'

    const arrayOfDrinks = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`

        }

    )
    
    drinkChoicesHTML += '<option value="5">None</option>'
    

    drinkChoicesHTML += arrayOfDrinks.join("")
    drinkChoicesHTML += "</select>"
    return drinkChoicesHTML
}