// for keyboard shortcut
// ctrl + e + i
var keys = [17, 69, 73];
// saving pressed keys state
var pressed_key_state = {};

var switch_id = "";
var text_input_id = "";

// initializer for hotkey changer
function initialize_switch_changer(_switch_id, _text_input_id) {
	switch_id = _switch_id;
	text_input_id = _text_input_id;

	resetKeyState();
	setOnKeyUpDownOnInput();
}

// add onkeyup and onkeydown event to
// text element writing on
function setOnKeyUpDownOnInput() {
	text_input_element = document.getElementById(text_input_id);
	text_input_element.onkeyup = function () {
		resetKeyState();
	};
	text_input_element.onkeydown = function (event) {
		changeSwitchState(event);
	};
}

// when state of converting switch changes
// sets focus to text inputing element
function setFocusOnChange(element) {
	switch_element = document.getElementById(switch_id);
	switch_element.onchange = function () {
		document.getElementById(element).focus();
	};
}

// check whether ready to change state or not
function isReadyToChange() {
	ready = true;
	for (var i in keys) {
		if (pressed_key_state[keys[i]] == false)
			ready = false;
	}
	return ready;
}

// set all data to false
function resetKeyState() {
	for (var i in keys) {
		pressed_key_state[keys[i]] = false;
	}
}

// enable or disable roman to cyrillic converting
// using keyboard shortcut
function changeSwitchState(event) {
	// get pressed key code
	pressed_key_code = event.which || event.keyCode;
	// check pressed key is in shortcut keys
	if (typeof pressed_key_state[pressed_key_code] != 'undefined') {
		// set this key pressed for changing state by shortcut keys
		pressed_key_state[pressed_key_code] = true;
		// checks if it is ready to change
		// in other words, are the all keys of shortcut keys pressed
		if (isReadyToChange()) {
			switch_element = document.getElementById(switch_id);
			// change the state of switch
			switch_element.checked = !(switch_element.checked);
			// sets back to false all keys pressed state
			resetKeyState();
		}
	} else {
		resetKeyState();
	}
}
