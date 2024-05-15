import { setFood } from "./transientState.js"

const handleFoodChange = (changeEvent) => {
  if (changeEvent.target.id === 'food') {
      const containerF = document.querySelector("#locationFood")

      const foodChoice = foods.find(food => parseInt(changeEvent.target.value) === food.id)

      setFood(food.id)

      containerF.innerHTML = `Chosen Food: ${foodChoice.id}`

  }
}

document.addEventListener("change", handleFoodChange)

export const foodChoices = async () => {
  const response = await fetch("http://localhost:8088/foods")
  const foods = await response.json()

  let foodHTML = " "

  foodHTML += '<select id="food">'
  foodHTML += '<option value="0">Select A Food</option>' //Is this needed? 


const foodArray = foods.map( (food) => {
    return `<option value="${food.id}">${food.name}</option>`
  }

)

foodHTML += '<option value="6">None</option>'
foodHTML += '<div id="locationFood"></div>'

foodHTML += foodArray.join(" ")
foodHTML += "</select>"

return foodHTML

} 