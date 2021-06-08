var addButtonElem = document.querySelector(".addButton");
var showButtonElem = document.querySelector(".showButton");
var regNoElem = document.querySelector(".regNos")
var errorMsgElem = document.querySelector(".errorMessage");
var regInstance = registration();

function addRegNumber(){
  
    // Get type of element
    let type = document.getElementById("text-box");
    // Get the text/value for the element
    let value = document.getElementById("text-box").value;

    // createElement() & add tagName
    newRegElement = document.createElement("regNo");
    newRegElement.style.backgroundColor = "burlywood";
    newRegElement.style.border = "5px solid burlywood"; 
    newRegElement.style.borderRadius = "8%"; 
    newRegElement.style.margin = "5px";

    // Use value as textnode 
    newRegElement.appendChild(document.createTextNode(value));

     // Append value as child to the parent
     newRegElement.innerText = regInstance.formatRegNo(regNoElem.value);
     document.getElementById("parent").appendChild(newRegElement);
     
    regNoElem.value = "";

}
addButtonElem.addEventListener('click', addRegNumber)

function regErrors(){
    if(regNoElem.value == undefined){
        errorMsgElem.innerHTML = "registration number is invalid";
    }
}
addButtonElem.addEventListener('click', regErrors)

function filterTowns(){

}
showButtonElem.addEventListener('click', filterTowns)