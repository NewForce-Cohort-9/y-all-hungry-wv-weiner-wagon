


export const DrinkOptions = async() => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()

    
    const handleDrinkChange = (changeEvent) => {
        if(changeEvent.target.id === 'drink') {
            const
        }

    }

    let drinkChoicesHTML = ""

    drinkChoicesHTML += '<select id="drink">'
    drinkChoicesHTML += '<option value="0">Drinks</option>'

    const arrayOfDrinks = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`

        }

    )
    
    drinkChoicesHTML += '<option value="5">None</option>'
    

    drinkChoicesHTML += arrayOfDrinks.join("")
    drinkChoicesHTML += "</select>"
    return drinkChoicesHTML
}