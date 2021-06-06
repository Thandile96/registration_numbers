var addButtonElem = document.querySelector(".addButton");
var showButtonElem = document.querySelector(".showButton");
var regNoElem = document.querySelector(".regNos")
var regInstance = registration();

function addRegNumber(){
    // Get type of element
    let type = document.getElementById("text-box");
    // Get the text/value for the element
    let value = document.getElementById("text-box").value;

    // createElement() & add tagName
    type = document.createElement("regNo");

    // Use value as textnode 
    type.appendChild(document.createTextNode(value));

     // Append value as child to the parent
     document.getElementById("parent").appendChild(type);

 regNoElem.value = "";

}
addButtonElem.addEventListener('click', addRegNumber)

function filterTowns(){

}
showButtonElem.addEventListener('click', filterTowns)