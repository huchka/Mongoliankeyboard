// for keyboard shortcut
// ctrl + e + i
var keys = [17, 69, 73];
// saving pressed keys state
var convert_state_shortcut_keys = {};

// check whether ready to change state or not
function isReadyToChange() {
	ready = true;
	for (var i in keys) {
		if (convert_state_shortcut_keys[keys[i]] == false)
			ready = false;
	}
	return ready;
}

// set all data to false
function setStateShortcutKeysToFalse() {
	for (var i in keys) {
		convert_state_shortcut_keys[keys[i]] = false;
	}
}

// enable or disable roman to cyrillic converting
// using keyboard shortcut
function changeConvertingSwitchState(event) {
	// get pressed key code
	pressed_key_code = event.which || event.keyCode;
	// check pressed key is in shortcut keys
	if (typeof convert_state_shortcut_keys[pressed_key_code] != 'undefined') {
		// set this key pressed for changing state by shortcut keys
		convert_state_shortcut_keys[pressed_key_code] = true;
		// checks if it is ready to change
		// in other words, are the all keys of shortcut keys pressed
		if (isReadyToChange()) {
			switch_element = document.getElementById("converting_switch");
			// change the state of switch
			switch_element.checked = !(switch_element.checked);
			// sets back to false all keys pressed state
			setStateShortcutKeysToFalse();
		}
	} else {
		setStateShortcutKeysToFalse();
	}
}
