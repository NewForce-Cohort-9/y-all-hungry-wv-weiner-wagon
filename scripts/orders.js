import { setOrder } from "./transientState.js"
import { setFood } from "./transientState.js";


export const foodChoices = async (selectedLocationId) => {
  try {
    // Fetch food items from the database
    const response = await fetch("http://localhost:8088/foods");
    const foods = await response.json();

    // Generate HTML for the dropdown options
    let foodHTML = '<select id="food">';
    foodHTML += '<option value="0">Select A Food</option>';

    foods.forEach(food => {
      // Get the current stock for the food item at the selected location
      const currentStock = food.stock[selectedLocationId] || 0;

      // Add the food item option with its current stock to the dropdown
      foodHTML += `<option value="${food.id}" data-stock="${currentStock}">${food.name} (${currentStock} available)</option>`;
    });

    foodHTML += '<option value="6">None</option>';
    foodHTML += '</select>';

    return foodHTML;
  } catch (error) {
    console.error('Error fetching food items:', error);
    return ''; // Return empty string in case of error
  }
};

// Function to handle completion of an order
export const completeOrder = async (selectedFoodId, selectedLocationId) => {
  try {
    // Fetch the food item from the database
    const response = await fetch(`http://localhost:8088/foods/${selectedFoodId}`);
    const foodItem = await response.json();

    // Reduce the stock of the food item at the selected location by one
    if (foodItem.stock[selectedLocationId] > 0) {
      foodItem.stock[selectedLocationId]--;
      await updateFoodItemStock(foodItem.id, foodItem.stock); // Update the stock in the database
    }
  } catch (error) {
    console.error('Error updating food item stock:', error);
  }
}