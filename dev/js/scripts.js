// menu

$('.icon__menu').click(function(){
	$('.navigation').bPopup({
    	closeClass:'navigation__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    });	
});

// authorization

$('.link__auth').click(function(){
	$('.auth').bPopup({
    	closeClass:'auth__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    });	
});

// plc no connect

$('.link__no-connect').click(function(){
	$('.no-connection').bPopup({
    	closeClass:'icon__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    });	
});

//  keypad

$('.auth__elements input').click(function(){
	$('.keypad').show();
});

// keypad close

$('.keypad__close').click(function(){
	$('.keypad').hide();
});

// main tabs

$('.tabs__content__two, .tabs__content__three').hide();

$('.tab__one').click(function(){
	$('.tabs__content__one').show();
	$('.tabs__content__two').hide();
	$('.tabs__content__three').hide();
	$('.tab__one').addClass('tab__active');
	$('.tab__two').removeClass('tab__active');
	$('.tab__three').removeClass('tab__active');
});

$('.tab__two').click(function(){
	$('.tabs__content__one').hide();
	$('.tabs__content__two').show();
	$('.tabs__content__three').hide();
	$('.tab__two').addClass('tab__active');
	$('.tab__one').removeClass('tab__active');
	$('.tab__three').removeClass('tab__active');
});

$('.tab__three').click(function(){
	$('.tabs__content__one').hide();
	$('.tabs__content__two').hide();
	$('.tabs__content__three').show();
	$('.tab__three').addClass('tab__active');
	$('.tab__two').removeClass('tab__active');
	$('.tab__one').removeClass('tab__active');
});

// main subtabs

$('.subtabs__content__outs').hide();

$('.subtab__one').click(function(){
	$('.subtabs__content__in').show();
	$('.subtabs__content__outs').hide();
	$('.subtab__one').addClass('subtab__active');
	$('.subtab__two').removeClass('subtab__active');
});

$('.subtab__two').click(function(){
	$('.subtabs__content__outs').show();
	$('.subtabs__content__in').hide();
	$('.subtab__two').addClass('subtab__active');
	$('.subtab__one').removeClass('subtab__active');
});