function registration(existingRegNumbers){


 var enteredRegNo = existingRegNumbers || [];
 var filteredTowns = [];

    function formatRegNo(regNumber){
        var regNumber = regNumber.toUpperCase();
        var reg = /^((CJ|CL|CF)\-([0-9]){5})+$/;
        var reg2 = /^((CJ|CL|CF)\s([0-9]){3}\-([0-9]){2})+$/;
        var reg3 = /^((CJ|CL|CF)\s([0-9]){5})+$/;
        var reg4 = /^((CJ|CL|CF)\s([0-9]){3}\s([0-9]){3})+$/;
        var reg5 = /^((CJ|CL|CF)\s([0-9]{4}))+$/;

        var validation = reg.test(regNumber);
        var validation2 = reg2.test(regNumber);
        var validation3 = reg3.test(regNumber);
        var validation4 = reg4.test(regNumber);
        var validation5 = reg5.test(regNumber);
        
        if(validation || validation2 || validation3 || validation4 || validation5){
            if(!enteredRegNo.includes(regNumber)){
                enteredRegNo.push(regNumber);
                return regNumber;
            }
            else if(enteredRegNo.includes(regNumber)){
                return "Registration number already exists"
            }
            
        }

        else{
            return "Invalid registration number";
        }

     
    }
    
    function getRegNo(){
        return enteredRegNo;
    }
    
    function townFilter(checkedTown){
       const filteredTowns = [];
      // alert(enteredRegNo.length)
        for(var i = 0; i < enteredRegNo.length; i++){
            //alert(enteredRegNo[i])
            if(enteredRegNo[i].startsWith(checkedTown)) {
                filteredTowns.push(enteredRegNo[i])
            }
        }
       return filteredTowns;  
       
       
    }

    function getFilteredTowns(){
        return filteredTowns;
    }




    return{
        formatRegNo,
        getRegNo,
        townFilter,
        getFilteredTowns,
    }


    
}