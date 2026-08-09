// /* === API Variable ===
// 1. Need to initiate the API variable 
// */

// /* === Empty Array and Variable ===
// 1. Need empty parties Array
// 2. Need empty variable to hold selectedParty
// */

// /* === Fetch from API ===
// Need to fetch from the API the following:
// 1. Array of parties (fetch => try{}catch{})
// 2. Array details per selected party by ID (fetch => try{}catch{})
// */

// /* === Display, Logic, & Requests ===
// 1. Display component that stores the party list array to the left of the Screen 
// -- This component will call the getParties function/fetch
// -- Display the following DOM script & then render function 
// ---- Party name

// 2. A second display component for the selectedParty
// -- This component CHECK PREVIOUS EXAMPLES but my guess is that I need to check the getPartyDetails function but make sure that the call matches the ID of the selectedParty. then run it through the display
// - question, does selectedParty need to hold the ID or the name?
// -- Display the following DOM script & then render function:
// ---- Party Name 
// ---- ID
// ---- Date
// ---- Description 
// ---- Location 

// 3. Event listener on party name in Display Component from party array/list
// -- Which will do the following:
// ---- On click action on specific party item from Array
// ---- Grab the ID and run it through the by ID function/fetch
// ---- Runs the selectedParty variable through another Display Component for the specific party selected details
// */

// /* === Needs to Render ===
// 1. Render the list of party names from the display component
// 2. Needs to render a default message on the right if a party is not selected "Select a party is none is selected."
// 3. Needs to render the specific party selected on the right from the event listener click
// */


/* === Code Start === */

/**
 * @typedef Party
 * @property {number} id
 * @property {string} name
 * @property {number} date
 * @property {string} description
 * @property {string} location
 */


/* === Constants === */
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api"
const COHORT = "/2026-FTB-CT-WEB-PT"
const RESOURCE = "/events"
const API = BASE + COHORT + RESOURCE


/* === States === */
let parties = []
let selectedParty;


/* Updates state with all events/parties from the API*/
async function getParties (){
try{
let res = await fetch(API)
let json = await res.json()
parties = json.data
render()
}catch(err){
console.error(err)
}}


/* Updates state with the selected party details from the API*/
async function getPartyDetails (id){
try{
let res = await fetch(`${API}/${id}`) //I probably need to pull through the ID or name, check docs
let json = await res.json()
selectedParty = json.data
render()
}catch(err){
console.error(err)
}}


/* === Components === */

/* Party name that shows more details about the party when selected  */
function partyListItem (party) {
for(let item of party){
    let list = document.createElement("li")
    item += list
    return list
}} //I feel like I missed a big step here

/* List of all the parties */
function displayPartyList (parties) {
const $parties = document.createElement("section")
$parties.classList.add("parties-list")
$parties.innerHTML = `
<h2>Upcoming Parties</h2>
<ul>${partyListItem(p)}</ul> 
` // I think this should make new list items when calling this function

$parties.querySelector("ul").addEventListener('click', async function(){
    await getPartyDetails(selectedParty.id)
}) // I think this is right but my logic might be backwards, left it async so it could take its time to load
return $parties
}

/* Detailed information about the selected party */
function displayPartyDetails (party) {
if(!selectedParty){
    const $p = document.createElement("p")
    $p.textContent = `Please select a party to view its details`
    return $p
}
const $party = document.createElement("section")
$party.classList.add("party-details")
$party.innerHTML = `
<h2>Party Details</h2>
<h3>${selectedParty.name} #${selectedParty.id}</h3>
<p>${selectedParty.date}</p>
<p><em>${selectedParty.location}<em></p>
<p>${selectedParty.description}</p>
`
return $party
}


/* === Render === */
function render (){
const $app = document.querySelector("#app")
$app.innerHTML = `
<h1>Party Planner</h1>
<main>
<displayPartyList></displayPartyList>
<displayPartyDetails></displayPartyDetails>
</main>
`

$app.querySelector("displayPartyList").replaceWith(displayPartyList())
$app.querySelector("displayPartyDetails").replaceWith(displayPartyDetails())

}

render()