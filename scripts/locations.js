// Fetch data from db
const fetchResponse = await fetch("http://localhost:8088/locations");
// Clean data to JS object
const locations = await fetchResponse.json();



// Define a function to be used in the event listener
const handleLocationChange = (changeEvent) => {
    // Check that the id of what was clicked is locationDropdown
    if (changeEvent.target.id === 'locationDropdown') {
        // Grab the element in index.html to change
        const container = document.querySelector("#locationMessage");

        // Find location info to pull name from using the id inserted into the value portion of the <option>
        const location = locations.find(location => parseInt(changeEvent.target.value) === location.id);

        // Add a message about where the user is picking up based on their selection
        container.innerHTML = `You're picking up from the ${location.name} location`;
    }
}

// Define a function which builds out a dropdown to display a list of locations and allows a user to select a location for pickup
export const getLocations = async () => {
    // Define a change event listener that invokes handleLocationChange() when dropdown selection is changed
    document.addEventListener("change", handleLocationChange);


    // Grab the section of index.html to insert the below info into
    const container = document.querySelector("#container");

    // Begin building a dropdown to select a location to pick up from
    let locationDropdown = `<article class='flexDisplay'>
                            <select id='locationDropdown'>
                            <option selected='true' disabled='disabled' value='0'>Select A Pickup Location</option>`;

    // Use .forEach() to iterate through the locations array to pull location info for each 
    locations.forEach(location => {
        locationDropdown += `<option name='location' value='${location.id}'>${location.name}</option>`;
    });

    // Close select for location dropdown
    locationDropdown += `</select>`;

    // Add a div that displays the message about which location is selected
    locationDropdown += `<div id='locationMessage'></div>
                        </article>`

    // Insert the dropdown into the container element in the index.html page
    //container.innerHTML += locationDropdown;
    return locationDropdown

}