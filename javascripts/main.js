// initialize
window.onload = function() {
	var converting_switch_id = "converting_switch";
	var mon_textarea_id = "mon_key_textarea";

	initialize_converting(mon_textarea_id);

	initialize_switch_changer(converting_switch_id, mon_textarea_id);

	// when converting switch changes
	// change value of converting which is in monkey.js
	converting_switch_element = document.getElementById(converting_switch_id);
	converting_switch_element.onchange = function () {
		converting = converting_switch_element.checked;
		document.getElementById(mon_textarea_id).focus();
	}
	
	document.getElementById(mon_textarea_id).value = "";
	document.getElementById(mon_textarea_id).focus();
}
