import { DrinkOptions } from "./drinks.js"


const maincontainer = document.querySelector("#container")

const render = async() => {
    const drinkOptionsHTML = await DrinkOptions()


    const composedHTML = `
        <h1>WV Weiner Wagon</h1>

        <article class="choices">
            <section class="choices__foods options">
                <h2>Food</h2>
                
            </section>

            <section class="choices__drinks options">
                <h2>Drink</h2>
                ${drinkOptionsHTML}
            </section>

            <section class="choices__desserts options">
                <h2>Dessert</h2>
                
            </section>
        </article>

        <article class="order">
        
        

        </article>

        <article class="customOrders">
            <h2>Orders</h2>
            
        </article>
    `

    maincontainer.innerHTML = composedHTML


}



render()
import { getLocations } from "./locations.js";

getLocations();
