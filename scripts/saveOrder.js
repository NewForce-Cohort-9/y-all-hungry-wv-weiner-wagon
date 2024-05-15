import { saveOrder } from "./transientState.js"

// Define a function to handle a user placing an order
const handleOrder = (clickEvent) => {
    if (clickEvent.target.id === 'saveOrder') {
        saveOrder();
    }
}

// Define a function which holds the order button and event listener that places the order
export const placeOrder = () => {
    document.addEventListener("click", handleOrder);

    return `<button id='placeOrder'>Place Order</button>`;
}