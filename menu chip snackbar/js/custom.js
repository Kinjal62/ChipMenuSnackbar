const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
$('#menu1').on('click',function(event){
	menu.open = true
});

const snackbar1 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar1'));
$('#baseline').on('click',function(event){
	snackbar1.open();
});

const snackbar2 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar2'));
$('#leading').on('click',function(event){
	snackbar2.open();
});

const snackbar3 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar3'));
$('#stacked').on('click',function(event){
	snackbar3.open();
});