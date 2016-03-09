describe("header feature spec", function() {

	it('should have a nav element with class navbar', function() {
		expect($('#headerNav').is('.navbar')).toBe(true);
	});

	it('should have background of white', function() {
		expect($('.navbar').css('background-color')).toEqual('rgb(255, 255, 255)');
	});

	it('should have a border color of white', function() {
		expect($('.navbar').css('border-top-color')).toEqual('rgb(255, 255, 255)');
		expect($('.navbar').css('border-right-color')).toEqual('rgb(255, 255, 255)');
		expect($('.navbar').css('border-bottom-color')).toEqual('rgb(255, 255, 255)');
		expect($('.navbar').css('border-left-color')).toEqual('rgb(255, 255, 255)');
	});

	it('should have a role of navigation', function() {
		expect($('nav').attr('role')).toEqual('navigation');
	});

});