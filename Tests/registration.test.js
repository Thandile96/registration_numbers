describe("The registration function", function(){
    describe("should set a regex for registration numbers from Stellenbosch(CL), Kuilsriver(CF) and Paarl(CJ)", function(){

        it("should take in 5 digit registration numbers for each town, there should be a hyphen between town indicator and digits ", function(){
            let regularExp = registration();

            assert.equal('CF-24568', regularExp.formatRegNo('CF-24568'));
            assert.equal('CJ-58947', regularExp.formatRegNo('CJ-58947'));
            assert.equal('CL-78563', regularExp.formatRegNo('CL-78563'));
        });

        it("should take in 5 digit registration numbers, separated by a hyphen after the first 3 digits for each town", function(){
            let regularExp = registration();

            assert.equal('CF 245-68', regularExp.formatRegNo('CF 245-68'));
            assert.equal('CJ 589-47', regularExp.formatRegNo('CJ 589-47'));
            assert.equal('CL 785-63', regularExp.formatRegNo('CL 785-63'));
        });

        it("should take in 5 digit registration numbers for each town, there should be a space between town indicator and digits", function(){
            let regularExp = registration();

            assert.equal('CF 24569', regularExp.formatRegNo('CF 24569'));
            assert.equal('CJ 94784', regularExp.formatRegNo('CJ 94784'));
            assert.equal('CL 56305', regularExp.formatRegNo('CL 56305'));
        });

    });

    describe("should filter registration numbers by town", function(){
        it("should filter registration numbers that start with 'CJ' when checked radio button is Paarl", function(){
            let regNumbers = registration();
                regNumbers.formatRegNo("CF 12345");
                regNumbers.formatRegNo("CJ 78945"); 
                regNumbers.formatRegNo("CL 74125");
                regNumbers.formatRegNo("CJ 123-45")
                
             assert.deepEqual(["CJ 78945", "CJ 123-45"], regNumbers.townFilter("CJ"));        

        });

        it("should filter registration numbers that start with 'CF' when checked radio button is Kuilsriver", function(){
            let regNumbers = registration();
                regNumbers.formatRegNo("CF 12345");  
                regNumbers.formatRegNo("CJ 78945");
                regNumbers.formatRegNo("CL 74125");
                regNumbers.formatRegNo("CJ 123-45");
             assert.deepEqual(["CF 12345"], regNumbers.townFilter("CF"));        

        });

        it("should filter registration numbers that start with 'CL' when checked radio button is Stellenbosch", function(){
            let regNumbers = registration();
                regNumbers.formatRegNo("CF 12345");  
                regNumbers.formatRegNo("CJ 78945");
                regNumbers.formatRegNo("CL 74125");
                regNumbers.formatRegNo ("CJ 123-45");
             assert.deepEqual(["CL 74125"], regNumbers.townFilter("CL"));        

        });

        describe("should display error messages", function(){

            it("should display 'Invalid registration number' when the entered registation number is invalid", function(){

                let errorMessages = registration();
                    
                    errorMessages.formatRegNo("CA 12345");

                assert.equal('Invalid registration number', errorMessages.formatRegNo("CA 12345"));
            });


            it("should display 'Registration number already exists!' when a registation number is repeated", function(){

                let errorMessages = registration();
                    
                    errorMessages.formatRegNo("CF 12345");
                    errorMessages.formatRegNo("CF 12345");

                assert.equal('Registration number already exists', errorMessages.formatRegNo("CF 12345", "CF 12345"));
            });

        });



    });

});