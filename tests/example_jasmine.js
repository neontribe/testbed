F.speed = 100;

describe('The test page', function(){

    beforeEach(function(){
        F.open('tests/target.html');
    });
    
    it('should display neontribe in the title', function() {
        F('h1')
            .visible()
            .text(/Neontribe/);
    });
});