import { setOrder } from "./transientState.js"; // Assuming you have a function to fetch the menu items from the database

export const showMenuAtLocation = async (locationId) => {
  try {
    // Fetch the menu items from the database
    const menu = await setOrder();

    // Filter the menu items to include only those available at the specified location
    const menuAtLocation = menu.filter(item => {
      return item.availableLocations.includes(locationId);
    });

    // Generate HTML for the menu items
    const menuHTML = menuAtLocation.map(item => {
      return `
        <div class="menu-item">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>Price: $${item.price}</p>
        </div>
      `;
    }).join('');

    // Return the HTML to display the menu items at the specified location
    return menuHTML;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return ''; // Return empty string in case of error
  }
};

//This might not be right... just trying things out thanks to the help of CHAT GPT