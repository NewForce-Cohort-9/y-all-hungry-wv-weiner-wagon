import { setFood } from "./TransientState.js"

const handleFoodChange = (changeEvent) => {
  if (changeEvent.target.id === 'food') {
      const containerF = document.querySelector("#locationFood")

      const food = foods.find(location => parseInt(changeEvent.target.value) === location.id);

      setLocation(location.id)

      container.innerHTML = `You're picking up from the ${location.name} location`;
  }
}

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
foodHTML += foodArray.join(" ")
foodHTML += "</select>"

return foodHTML

} 


