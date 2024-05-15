<<<<<<< HEAD
import { foodChoices } from "./food.js"
=======
import { DrinkOptions } from "./drinks.js"
>>>>>>> main
import { getLocations } from "./locations.js";

getLocations();

<<<<<<< HEAD
const container = document.querySelector("#container")

export const render = async () => {
  const foodHTML = await foodChoices()
  const locationDropdown = await getLocations()


  const composedHTML = `
    <h1>WV Weiner Wagon</h1>

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
        
      </section>
    
      <section class="choices__desserts options">
        <h2>Desserts</h2>
        
      </section>
      </article>
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
=======
const maincontainer = document.querySelector("#container")

const render = async() => {
    const drinkOptionsHTML = await DrinkOptions()
    const locationOptionsHTML = await getLocations()

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

>>>>>>> main
