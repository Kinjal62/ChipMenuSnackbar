mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
// menu.open = true;
const snackbar1 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar1'));
const snackbar2 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar2'));
const snackbar3 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar3'));
$('#baseline').on('click',function(event){
	snackbar1.open();
});
$('#leading').on('click',function(event){
	snackbar2.open();
});
$('#stacked').on('click',function(event){
	snackbar3.open();
});