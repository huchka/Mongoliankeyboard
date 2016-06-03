var text;

var letter = [];

function set_convert_data () {
	letter["a"] = "а";
	letter["b"] = "б";
	letter["v"] = "в";
	letter["g"] = "г";
	letter["d"] = "д";
	letter["ye"] = "е";
		letter["ыe"] = "е";
	letter["yo"] = "ё";
		letter["ыo"] = "ё";
	letter["j"] = "ж";
	letter["z"] = "з";
	letter["i"] = "и";
	letter["i="] = "й";
		letter["и="] = "й";
	letter["k"] = "к";
	letter["l"] = "л";
	letter["m"] = "м";
	letter["n"] = "н";
	letter["o"] = "о";
	letter["o="] = "ө";
		letter["о="] = "ө";
	letter["p"] = "п";
	letter["r"] = "р";
	letter["s"] = "с";
	letter["t"] = "т";
	letter["u"] = "у";
	letter["u="] = "ү";
		letter["у="] = "ү";
	letter["f"] = "ф";
	letter["h"] = "х";
	letter["c"] = "ц";
	letter["ch"] = "ч";
		letter["цh"] = "ч";
		letter["цх"] = "ч";
	letter["sh"] = "ш";
		letter["сh"] = "ш";
		letter["сх"] = "ш";
	letter["sh="] = "щ";
		letter["сh="] = "щ";
		letter["сх="] = "щ";
		letter["ш="] = "щ";
	letter["i''"] = "ъ";
		letter["и''"] = "ъ";
		letter["ь'"] = "ъ";
	letter["i'"] = "ь";
		letter["и'"] = "ь";
	letter["y"] = "ы";
	letter["e"] = "э";
	letter["yu"] = "ю";
		letter["ыu"] = "ю";
		letter["ыу"] = "ю";
	letter["ya"] = "я";
		letter["ыa"] = "я";
		letter["ыа"] = "я";

	letter["аи"] = "ай";
	letter["ии"] = "ий";
	letter["ои"] = "ой";
	letter["уи"] = "уй";
	letter["үи"] = "үй";
	letter["эи"] = "эй";
}

function roman2cyrillic() {
	text = document.getElementById("monkeytextarea").value;

	for (var l in letter) {
		l_reg = new RegExp(l, "g");
		text = text.replace(l_reg, letter[l]);
	}
	var obj = document.getElementById("monkeytextarea");
	obj.value = text;
	obj.focus();
	obj.scrollTop = obj.scrollHeight;
}

window.onload = function() {
	set_convert_data();
}
