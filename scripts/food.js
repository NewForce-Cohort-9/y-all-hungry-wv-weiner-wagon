import { setFood } from "./TransientState.js"

const response = await fetch("http://localhost:8088/foods")
  const foods = await response.json()

export const foodChoices = async () => {
  document.addEventListener("change", handleLocationChange);

  
const handleLocationChange = (changeEvent) => {
  
  if (changeEvent.target.id === 'locationDropdown') {
     
      const container = document.querySelector("#locationMessage");

      const location = locations.find(location => parseInt(changeEvent.target.value) === location.id);

      container.innerHTML = `You're picking up from the ${location.name} location`;
  }
}

  let foodHTML = " "

  foodHTML += '<select id="food">'
  foodHTML += '<option value="0">Select A Food</option>' //Is this needed? 

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