/*import { setFood } from "./TransientState.js"*/

export const foodChoices = async () => {
  const response = await fetch("http://localhost:3000/foods")
  const foods = await response.json()

  let foodHTML = " "

  foodHTML += '<select id="food">'
  foodHTML += '<option value="0">Foods</option>'

  /*const handleFoodChoices = (changeEvent) => {
    if(changeEvent.target.name === "food"){
       setFood(parseInt(changeEvent.target.value))
    }
}  

document.addEventListener("change", handleFoodChoices)*/

const foodArray = foods.map( (food) => {
    return `<option value="${food.id}">${food.name}</option>`
  }

)

foodHTML += '<option value="6">None</option>'
foodHTML += foodArray.join(" ")
foodHTML += "</select>"

return foodHTML

} 


//<input type='radio' name='food' value='${oneFood.id}' /> ${oneFood.name}