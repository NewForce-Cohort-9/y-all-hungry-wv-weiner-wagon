//add the required properties to the object below for your order
const transientState = {
    foodId: 0,
}

//add the required setter functions to create your order
export const setFood = (chosenFoodId) => {
    transientState.foodId = chosenFoodId
    console.log(transientState)
}