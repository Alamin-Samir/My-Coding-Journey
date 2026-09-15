async function loadData() {
    
    // Step 1: Fetching data from the server
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // Step 2: Converting response to JSON
    let data = await response.json();
    
    // Step 3: Selecting the HTML element where we want to show the data
    let titleElement = document.getElementById("resultTitle");
    
    // Step 4: Putting the fetched title into the HTML element
    titleElement.textContent = data.title;
}

// Executing the function
loadData();