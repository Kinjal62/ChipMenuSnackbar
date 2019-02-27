// drawer js
mdc.autoInit();
var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;
});
 // sign in form js
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText1'));
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText2'));
 // registration form js
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText3'));
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText4'));
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText5'));
 mdc.textField.MDCTextField.attachTo(document.querySelector('.myText6'));
// dialog box open for registration
const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
$('#signin').on('click',function(evt){
	dialog2.open();
});
function signin(){
	var emailid = document.getElementById('emailid').value;
	var password = document.getElementById('password').value;
	var sign_in = {"eamil" : email,"pwd": pwd};
} 
function signup(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var contact = document.getElementById('contact').value;
	var pwd = document.getElementById('pwd').value;
	var sign_up = { "name": name, "eamil" : email, "contact": contact,"pwd": pwd};
	console.log(sign_up);
}
// for login
const snackbar1 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar1'));
$('#reg').on('click',function(event){
	snackbar1.open();
});
const snackbar2 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar2'));
$('#cancel').on('click',function(event){
	snackbar2.open();
});
// for signup
const snackbar3 = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar3'));
$('#signup').on('click',function(event){
	snackbar3.open();
});
// for menu 
const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
$('#menu1').on('click',function(event){
	menu.open = true
});