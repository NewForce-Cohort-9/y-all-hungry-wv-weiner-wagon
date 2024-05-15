import { setFood } from "./TransientState.js"

export const foodChoices = async () => {
  const response = await fetch("http://localhost:8088/foods")
  const foods = await response.json()

  // Define a function to be used in the event listener
/*const handleLocationChange = (changeEvent) => {
  // Check that the id of what was clicked is locationDropdown
  if (changeEvent.target.id === 'locationDropdown') {
      // Grab the element in index.html to change
      const container = document.querySelector("#locationMessage");

      // Find location info to pull name from using the id inserted into the value portion of the <option>
      const location = locations.find(location => parseInt(changeEvent.target.value) === location.id);

      // Add a message about where the user is picking up based on their selection
      container.innerHTML = `You're picking up from the ${location.name} location`;
  }
}*/

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