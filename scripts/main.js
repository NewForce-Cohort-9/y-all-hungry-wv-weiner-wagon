import { dessertOptions } from "./desserts.js";
import { DrinkOptions } from "./drinks.js";
import { foodChoices } from "./food.js"
import { getLocations } from "./locations.js";
import { placeOrder } from "./saveOrder.js";

const container = document.querySelector("#container")

    
export const render = async () => {
  const foodHTML = await foodChoices()
  const drinkOptionsHTML = await DrinkOptions()
  const locationDropdown = await getLocations()
  const placeUserOrder = await placeOrder()
  const dessertHTML = await dessertOptions()


  const composedHTML = `
    <h1>WV Weiner Wagon</h1>
    <div class='flexDisplay'>
        <article class="choices">
            <section class="choices__locations options">
                <h2>Locations</h2>
                ${locationDropdown}
            </section>
    
            <section class="choices__food options">
                <h2>Foods</h2>
                ${foodHTML}
            </section>
        
            <section class="choices__drinks options">
                <h2>Drinks</h2>
                ${drinkOptionsHTML}
            </section>
    
            <section class="choices__desserts options">
                <h2>Dessert</h2>
                ${dessertHTML}
            </section>
           
        </article>

        <aside class='displayOrder'>
            <div>
                <h1 class='asideText header'>Order Up!</h1>
                <div id='locationMessage'></div>
                <h3 class='asideText'>Food</h3>
                <h3 class='asideText'>Drink</h3>
                <h3 class='asideText'>Dessert</h3>
            </div>
            <div class='button'>${placeUserOrder}</div>
        </aside>
    </div>
`

container.innerHTML = composedHTML

}

render()
