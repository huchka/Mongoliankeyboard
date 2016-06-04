var letter = [];
var level_two_enders = ["e", "h", "i", "u", "o", "=", "'"];
var converting;

function setConvertData () {
	letter["a"] = "а";
	letter["b"] = "б";
	letter["v"] = "в";
	letter["g"] = "г";
	letter["d"] = "д";
		letter["ыe"] = "е";
		letter["ыo"] = "ё";
	letter["j"] = "ж";
	letter["z"] = "з";
	letter["i"] = "и";
		letter["и="] = "й";
	letter["k"] = "к";
	letter["l"] = "л";
	letter["m"] = "м";
	letter["n"] = "н";
	letter["o"] = "о";
		letter["о="] = "ө";
	letter["p"] = "п";
	letter["r"] = "р";
	letter["s"] = "с";
	letter["t"] = "т";
	letter["u"] = "у";
		letter["у="] = "ү";
	letter["f"] = "ф";
	letter["h"] = "х";
	letter["c"] = "ц";
		letter["цh"] = "ч";
		letter["сh"] = "ш";
		letter["ш="] = "щ";
		letter["ь'"] = "ъ";
		letter["и'"] = "ь";
	letter["y"] = "ы";
	letter["e"] = "э";
		letter["ыu"] = "ю";
		letter["ыa"] = "я";

	letter["аi"] = "ай";
	letter["иi"] = "ий";
	letter["оi"] = "ой";
	letter["уi"] = "уй";
	letter["үi"] = "үй";
	letter["эi"] = "эй";
}

function convertingState() {
	converting = document.getElementById("converting_switch").checked;
	document.getElementById("mon_key_textarea").focus();
}

function roman2cyrillic(org_characters) {
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

function convertText() {
	if (converting) {
		monkey_textarea = document.getElementById("mon_key_textarea");
		text = monkey_textarea.value;

		cursor_point = monkey_textarea.selectionStart;

		last_two_character = text.substring(cursor_point-2, cursor_point);
		converted_characters = roman2cyrillic(last_two_character);

		text = text.substring(0, cursor_point-2) + converted_characters + text.substring(cursor_point, text.length);

		monkey_textarea.value = text;
	}

}

window.onload = function() {
	setConvertData();
	convertingState();
}
