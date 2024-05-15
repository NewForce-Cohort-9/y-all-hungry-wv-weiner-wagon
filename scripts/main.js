import { dessertOptions } from "./desserts.js";

const container = document.querySelector("container")

const render = async () => {
    const dessertOptionsHTML = await dessertOptions ()
    const dessertHTML = await dessertOptions()



    container.innerHTML = `
    ${dessertHTML}`
}
document.addEventListener("newOrderCreated", render)
render()