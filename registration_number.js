var addButtonElem = document.querySelector(".addButton");
var showButtonElem = document.querySelector(".showButton");
var showAllButton = document.querySelector(".showAll")
var regNoElem = document.querySelector(".regNos")
var errorMsgElem = document.querySelector(".errorMessage");
var addFilterElem =  document.querySelector(".filteringReg");

var existingRegNumbers = JSON.parse(localStorage.getItem('regNumbers'));
var displayReg = document.querySelector(".showReg");

//alert(existingRegNumbers)
if(localStorage['regNumbers']){
    for(var i = 0; i < existingRegNumbers.length; i++){
        var newRegElement = document.createElement("button")
        newRegElement.innerText = existingRegNumbers[i];
        newRegElement.classList.add("regPlates");
        document.getElementById("display").appendChild(newRegElement);

    }
}
var regInstance = registration(existingRegNumbers);


function addRegNumber(){
    
    // Get the type of element and its text/ value
    let value = document.getElementById("text-box").value;

    var displayArea = regInstance.formatRegNo(regNoElem.value);

    // createElement() & add tagName
    newRegElement = document.createElement("button");
    newRegElement.classList.add("regPlates");

    if(displayArea == 'Invalid registration number'){
        errorMsgElem.innerText = "Please enter a valid registration number!"
        errorMsgElem.classList.add("errorMsg");
        setTimeout(function(){
            errorMsgElem.innerText = "";

        }, 1900);
        return;
    }

    if(displayArea == "Registration number already exists"){
        errorMsgElem.innerText = "Registration number already exists!"
        errorMsgElem.classList.add("errorMsg");
        setTimeout(function(){
            errorMsgElem.innerText = "";

        }, 1900);
        return;

    }

    // Use value as textnode 
    newRegElement.appendChild(document.createTextNode(value));

     // Append value as child to the parent
    newRegElement.innerText = displayArea;
     //Storing reg numbers
     document.getElementById("display").appendChild(newRegElement);
     
    regNoElem.value = "";

    localStorage['regNumbers'] = JSON.stringify(regInstance.getRegNo());

}
addButtonElem.addEventListener('click', addRegNumber)

function filterTowns(){
    //newRegElement.innerHTML = '';
    addFilterElem.innerHTML = '';
  
    var checkedRadioButton = document.querySelector("input[name='town']:checked");

        if(checkedRadioButton){
           
            // var checkClass = document.getElementById("filteredTowns");
            //  checkClass.classList.remove('regPlates')
            
            var filtered_Towns = regInstance.townFilter(checkedRadioButton.value);
            for(var i = 0; i < filtered_Towns.length; i++){
                var newRegElement = document.createElement("button")
                newRegElement.innerText = filtered_Towns[i];
                newRegElement.classList.add("regPlates");
                addFilterElem.appendChild(newRegElement);
                document.getElementById("display").style.display = "none"; 

            }
        }
        checkedRadioButton.checked = false;

}
showButtonElem.addEventListener('click', filterTowns)

function showAllReg(){

    if(localStorage['regNumbers']){
        for(var i = 0; i < existingRegNumbers.length; i++){
            var newRegElement = document.createElement("button")
            newRegElement.innerText = existingRegNumbers[i];
            newRegElement.classList.add("regPlates");
            document.getElementById("showAll").appendChild(newRegElement);
            document.getElementById("filteredTowns").style.display = "none"; 
            document.getElementById("display").style.display = "none"; 
        }
    }
    
   
}
showAllButton.addEventListener('click', showAllReg)