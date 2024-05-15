import { dessertOptions } from "./desserts.js";
import { DrinkOptions } from "./drinks.js";
import { foodChoices } from "./food.js"
import { getLocations } from "./locations.js";


getLocations();

const container = document.querySelector("#container")

    
export const render = async () => {
  const foodHTML = await foodChoices()
  const drinkOptionsHTML = await DrinkOptions()
  const locationDropdown = await getLocations()
  const dessertHTML = await dessertOptions()


  const composedHTML = `
    <h1>WV Weiner Wagon</h1>

        <article class="order">
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
        <h2>Desserts</h2>
          ${dessertHTML}
      </section>
      </article>

      <article class="order">
       
        </article>


        <article class="customOrders">
            <h2>Orders</h2>
           
        </article>

      <aside class='displayOrder'>
      </aside>
`

container.innerHTML = composedHTML

}

render()


