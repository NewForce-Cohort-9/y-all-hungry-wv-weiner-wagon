import { foodChoices } from "./food.js"

const container = document.querySelector("#container")

export const render = async () => {
  const foodHTML = await foodChoices()


  const composedHTML = `
  <h1>WV Weiner Wagon</h1>

  <article class="choices">
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