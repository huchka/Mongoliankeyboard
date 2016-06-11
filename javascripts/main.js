// initialize
window.onload = function() {
	var converting_switch = "converting_switch";
	var mon_textarea = "mon_key_textarea";

	initialize_converting(converting_switch, mon_textarea);

	initialize_switch_changer(converting_switch, mon_textarea);

	setFocusOnChange(mon_textarea);
	
	document.getElementById(mon_textarea).value = "";
	document.getElementById(mon_textarea).focus();
}
