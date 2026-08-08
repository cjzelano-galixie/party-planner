/*
index.html is not modified. All elements are generated via JS.
The application updates state by fetching an array of parties from the API.
The application renders a list of party names.
When a party name is clicked on, the application updates state by fetching information about a single party from the API.
The application renders the name, ID, date, description, and location of the selected party.
The application renders a message telling users to select a party if none is selected.
Functions are used to organize logic involving state changes.
The application is rerendered whenever state changes.
UI elements are organized into component functions.
All thrown errors are explicitly caught with a try...catch statement.
*/

/* === Empty Array and Variable ===
1. Need empty parties Array
2. Need empty variable to hold selectedParty
*/
let parties = []
let selectedParty;

/* === Fetch from API ===
Need to fetch from the API the following:
1. Array of parties (fetch => try{}catch{})
2. Array details per selected party by ID (fetch => try{}catch{})
*/

/*
Add JSDOC here
*/
function getParties (parties){

try (){

let res = fetch(API)
let json = res.json
parties = json.data
render()

}catch(err){

console.log = (err)

}}


/*
Add JSDOC here
*/
function getPartyDetails (party){

try(){

let res = fetch(API) //I probably need to pull through the ID or name, check docs
let json = res.json
// not sure if I need no code here or if I need more code like party = json.data
render()

}catch(err){

console.log(err)

}}

/* === Display, Logic, & Requests ===
1. Display component that stores the party list array to the left of the Screen 
-- This component will call the getParties function/fetch
-- Display the following DOM script & then render function 
---- Party name

2. A second display component for the selectedParty
-- This component CHECK PREVIOUS EXAMPLES but my guess is that I need to check the getPartyDetails function but make sure that the call matches the ID of the selectedParty. then run it through the display
- question, does selectedParty need to hold the ID or the name?
-- Display the following DOM script & then render function:
---- Party Name 
---- ID
---- Date
---- Description 
---- Location 

3. Event listener on party name in Display Component from party array/list
-- Which will do the following:
---- On click action on specific party item from Array
---- Grab the ID and run it through the by ID function/fetch
---- Runs the selectedParty variable through another Display Component for the specific party selected details
*/
function displayPartyList (parties) {
$parties.createElement("section")
$parties.classList.add("parties-list")
$parties.innerHTML = `
<h2>Upcoming Parties</h2>
`

$parties.querySelector.addEventListener('click', function(){

})
return $parties
}

function displayPartyDetails (party) {
$party.createElement("section")
$party.classList.add("party-details")
$party.innerHTML = `
<h2>Party Details</h2>

`
return $party
}

/* === Needs to Render ===
1. Render the list of party names from the display component
2. Needs to render a default message on the right if a party is not selected "Select a party is none is selected."
3. Needs to render the specific party selected on the right from the event listener click
*/

function render (){

$page.getElementById("app")
$page.innerHTML = `
<h1>Party Planner</h1>
<displayPartyList></displayPartyList>
<displayPartyDetails></displayPartyDetails>
`

$pages.querySelector("displayPartyList").replaceWith(displayPartyList())
$pages.querySelector("displayPartyDetails").replaceWith(displayPartyDetails())

}

render()