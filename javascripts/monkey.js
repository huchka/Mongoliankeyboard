var letter = [];
var level_two_enders = ["e", "h", "i", "u", "o", "=", "'"];
var converting;

// converting database
function setConvertData () {
	// lowercase database
	letter["a"] = "а"; letter["b"] = "б"; letter["v"] = "в";
	letter["g"] = "г"; letter["d"] = "д"; letter["ыe"] = "е";
	letter["ыo"] = "ё"; letter["j"] = "ж"; letter["z"] = "з";
	letter["i"] = "и"; letter["и="] = "й"; letter["k"] = "к";
	letter["l"] = "л"; letter["m"] = "м"; letter["n"] = "н";
	letter["o"] = "о"; letter["о="] = "ө"; letter["p"] = "п";
	letter["r"] = "р"; letter["s"] = "с"; letter["t"] = "т";
	letter["u"] = "у"; letter["у="] = "ү"; letter["f"] = "ф";
	letter["h"] = "х"; letter["c"] = "ц"; letter["цh"] = "ч";
	letter["сh"] = "ш"; letter["ш="] = "щ"; letter["ь'"] = "ъ";
	letter["и'"] = "ь"; letter["y"] = "ы"; letter["e"] = "э";
	letter["ыu"] = "ю"; letter["ыa"] = "я";
	letter["аi"] = "ай"; letter["иi"] = "ий"; letter["оi"] = "ой";
	letter["уi"] = "уй"; letter["үi"] = "үй"; letter["эi"] = "эй";
	letter["өi"] = "өй";

	// uppercase database
	letter["A"] = "А"; letter["B"] = "Б"; letter["V"] = "В";
	letter["G"] = "Г"; letter["D"] = "Д"; letter["E"] = "Е";
	letter["ЫO"] = "Ё"; letter["J"] = "Ж"; letter["Z"] = "З";
	letter["I"] = "И"; letter["И="] = "Й"; letter["K"] = "К";
	letter["L"] = "Л"; letter["M"] = "М"; letter["N"] = "Н";
	letter["O"] = "О"; letter["О="] = "Ө"; letter["P"] = "П";
	letter["R"] = "Р"; letter["S"] = "С"; letter["T"] = "Т";
	letter["U"] = "У"; letter["У="] = "Ү"; letter["F"] = "Ф";
	letter["H"] = "Х"; letter["C"] = "Ц"; letter["ЦH"] = "Ч";
	letter["СH"] = "Ш"; letter["Ш="] = "Щ"; letter["Ь'"] = "Ъ";
	letter["Y"] = "Ы"; letter["И'"] = "Ь"; letter["E"] = "Э";
	letter["ЫU"] = "Ю"; letter["ЫA"] = "Я";
	letter["АI"] = "АЙ"; letter["ИI"] = "ИЙ"; letter["ОI"] = "ОЙ";
	letter["УI"] = "УЙ"; letter["ҮI"] = "ҮЙ"; letter["ЭI"] = "ЭЙ";
	letter["ӨI"] = "ӨЙ";

	letter["Аi"] = "Ай"; letter["Иi"] = "Ий"; letter["Оi"] = "Ой";
	letter["Уi"] = "Уй"; letter["Үi"] = "Үй"; letter["Эi"] = "Эй";
	letter["Өi"] = "Өй";
}

// function for converting toggle swtich state
function convertingState() {
	converting = document.getElementById("converting_switch").checked;
	document.getElementById("mon_key_textarea").focus();
}

// converting roman to cyrillic function
// handing variable (org_characters)'s length can be 1 or 2
function roman2cyrillic(org_characters) {
	// check if org_characters does not exist in database
	if (typeof letter[org_characters] == 'undefined') {
		if (org_characters.length == 2) {
			if (typeof letter[org_characters[1]] == 'undefined') {
				str = org_characters;
			} else {
				str = org_characters[0] + letter[org_characters[1]];
			}
		} else {
			str = org_characters;
		}
	} else {
		str = letter[org_characters];
	}
	return str;
}

// set cursor within the textfield
function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function convertText(event) {
	// this part is for checking right key is pressed for entering character
	// get pressed key code
	pressed_key_code = event.which || event.keyCode;
	// check key code is right character
	character_inserted = false;
	if ((pressed_key_code>=65 && pressed_key_code<=90)		// a--z
		|| pressed_key_code == 187							// =
		|| pressed_key_code == 222)							// '
		character_inserted = true;

	// converting characters starts from here.
	// if converting switch on and right key pressed for inserting character
	if (converting && character_inserted) {
		monkey_textarea = document.getElementById("mon_key_textarea");

		// get all text from textarea field
		text = monkey_textarea.value;

		// get current curson position within textarea field
		cursor_point = monkey_textarea.selectionStart;

		// get two characters before cursor
		// and convert them
		last_two_character = text.substring(cursor_point-2, cursor_point);
		converted_characters = roman2cyrillic(last_two_character);

		// insert converted character inside text
		text = text.substring(0, cursor_point-2) 
				+ converted_characters
				+ text.substring(cursor_point, text.length);

		// put all text into textarea field
		monkey_textarea.value = text;

		// set cursor on right position
		diff = last_two_character.length - converted_characters.length;
		setCaretPosition("mon_key_textarea", cursor_point-diff);
	}

}

// initialize
window.onload = function() {
	setConvertData();
	convertingState();
}
