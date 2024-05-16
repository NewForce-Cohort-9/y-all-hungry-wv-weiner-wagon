export const foodLocation = async () => {
  const response = await fetch("http://localhost:8088/locationFoodMenu?_expand=food")
  const foods = await response.json()

  const handleFoodChange = (changeEvent) => {
    if (changeEvent.target.id === 'food') {

        let containerF = document.querySelector("#locationFood")
  
        const foodChoice = foods.find(food => parseInt(changeEvent.target.value) === food.id)
  
        setFood(foodChoice.id)
  
        containerF.innerHTML = `Chosen Food: ${foodChoice.name}`
  
    }

  }

}

let orderHTML = ""


const divStringArray = await orders.map(
    (singleOrder) => {
        // console.log(singleOrder)

        const orderPrice = singleOrder?.metal?.price + singleOrder?.size?.price + singleOrder?.style?.price
        return `<div>
        Order: $${orderPrice}
        </div>`
    }
)

orderHTML += divStringArray.join("")

return orderHTML