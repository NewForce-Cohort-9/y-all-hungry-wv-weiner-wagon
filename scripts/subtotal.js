export const subtotal = () => {

    let orderSubtotal = 0;
    let drinkPrice = 0

    const addDrinkToSubtotal = async (changeEvent) => {
        // Fetch drink info
        const response = await fetch("http://localhost:8088/drinks");
        // Clean that data
        const drinks = await response.json();
    
        if (changeEvent.target.id === 'drink') {
            // Drink object
            const drinkP = drinks.find(drink => parseInt(changeEvent.target.value) === drink.id);
        
            // Pull price from drink object
            drinkPrice = drinkP.price;
    
            // Check
            console.log(drinkPrice, "drink prince")
        }
    console.log(orderSubtotal, "subtotal")
    
    orderSubtotal = drinkPrice;

    orderSubtotal = orderSubtotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return orderSubtotal
    }

    document.addEventListener("change", addDrinkToSubtotal)    
    
    // (event)
    // orderSubtotal = drinkPrice;
    
    
    
    return orderSubtotal;
}
    
