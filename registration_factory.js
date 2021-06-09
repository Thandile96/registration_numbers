function registration(){

    function formatRegNo(regNumber){
        var regNumber = regNumber.toUpperCase();
        var reg = /^((CJ|CL|CF)([0-9]){5})+$/;
        var reg2 = /^((CJ|CL|CF)\s([0-9]){3}\-([0-9]){2})+$/;
        var reg3 = /^((CJ|CL|CF)\s([0-9]){3})+$/;

        var validation = reg.test(regNumber);
        var validation2 = reg2.test(regNumber);
        var validation3 = reg3.test(regNumber);
        console.log(validation3);
        
        if(validation || validation2 || validation3){
            return regNumber;
        }
        else{
            return;
        }
    }
   




return{
    formatRegNo,
}


    
}