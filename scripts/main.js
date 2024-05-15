import { dessertOptions } from "./desserts.js";
import { DrinkOptions } from "./drinks.js";
import { getLocations } from "./locations.js";


getLocations();

const maincontainer = document.querySelector("#container")

const render = async() => {
    const drinkOptionsHTML = await DrinkOptions()
    const locationOptionsHTML = await getLocations()
    const dessertHTML = await dessertOptions()

    const composedHTML = `
        <h1>WV Weiner Wagon</h1>
        <article>
            <section class="choices__location options">
                <h2>Locations</h2>
                ${locationOptionsHTML}
            </section>
        </article>

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
                ${dessertHTML}
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
