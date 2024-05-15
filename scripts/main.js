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
        
      </section>
      </article>
      <aside class='displayOrder'>
      </aside>
`

container.innerHTML = composedHTML

}

render()

/*<section class="choices__drinks options">
<h2>drinks</h2>
${drinksHTML}
</section>

<section class="choices__desserts options">
<h2>Desserts</h2>
${dessertsHTML}
</section>
</article>


<article class="order">
${buttonHTML}*/
