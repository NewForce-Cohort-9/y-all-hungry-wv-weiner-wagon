import { setFood } from "./transientState.js"


export const foodChoices = async () => {
  const response = await fetch("http://localhost:8088/foods")
  const foods = await response.json()

  const handleFoodChange = (changeEvent) => {
    if (changeEvent.target.id === 'food') {

        const containerF = document.querySelector("#locationFood")
  
        const foodChoice = foods.find(food => parseInt(changeEvent.target.value) === food.id)
  
        setFood(foodChoice.id)
  
        containerF.innerHTML = `Chosen Food: ${foodChoice.name}`
  
    }

  }
  
  document.addEventListener("change", handleFoodChange)
  

  let foodHTML = " "

  foodHTML += '<select id="food">'
  foodHTML += '<option value="0">Select A Food</option>' 

const foodsArray = foods.map( (food) => {
    return `<option value="${food.id}">${food.name}</option>`
  }

)

foodHTML += '<option value="6">None</option>'

foodHTML += foodsArray.join(" ")
foodHTML += "</select>"
foodHTML += '<div id="locationFood"></div>'

return foodHTML

} 