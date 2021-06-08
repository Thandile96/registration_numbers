describe("The registration function", function(){
    describe("should set a regex for registration numbers from Stellenbosch(CL), Kuilsriver(CF) and Paarl(CJ)", function(){

        it("should take in 5 digit registration numbers for each town", function(){
            let regularExp = registration();

            assert.equal('CF24568', regularExp.formatRegNo('CF24568'));
            assert.equal('CJ58947', regularExp.formatRegNo('CJ58947'));
            assert.equal('CL78563', regularExp.formatRegNo('CL78563'));
        });

        it("should take in 5 digit registration numbers, separated by a hyphen after the first 3 digits for each town", function(){
            let regularExp = registration();

            assert.equal('CF 245-68', regularExp.formatRegNo('CF 245-68'));
            assert.equal('CJ 589-47', regularExp.formatRegNo('CJ 589-47'));
            assert.equal('CL 785-63', regularExp.formatRegNo('CL 785-63'));
        });

        it("should take in 3 digit registration numbers for each town, there should be a space between town indicator and digits ", function(){
            let regularExp = registration();

            assert.equal('CF 245', regularExp.formatRegNo('CF 245'));
            assert.equal('CJ 947', regularExp.formatRegNo('CJ 947'));
            assert.equal('CL 563', regularExp.formatRegNo('CL 563'));
        });

        


    });

});