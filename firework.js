const firework = new function firework() {
	this.encrypt = (string="example", cipher=[["e", "x", "a", "m", "p", "l"], ["1", "2", "3", "4", "5", "6"]]) => {
		var new_string = "";
		while (string != "") {
			if (cipher[0].indexOf(string[0]) != -1) {
				new_string+=cipher[1][cipher[0].indexOf(string[0])];
			}
			else {
				new_string+=string[0];
			}
			string=string.replace(string[0], "");
		}
		return new_string
	};
	this.random_cipher = (string="example", symbols=1, area="high") => {
		let cipher = [[], []];
		while (string != "") {
			if (cipher[0].indexOf(string[0]) == -1) {
				cipher[0].push(string[0]);
				var replacer = "";
				for (let i = 0; i < symbols; i++) {
					if (area=="low") {
						replacer+=String.fromCharCode(String(parseInt(String(Math.random()*10).replace(".", "")))%1000);
					}
					else if (area=="verylow") {
						replacer+=String.fromCharCode(String(parseInt(String(Math.random()*10).replace(".", "")))%(127-33)+33);
					}
					else {
						replacer+=String.fromCharCode(String(Math.random()*10).replace(".", ""));
					}
				}
				cipher[1].push(replacer);
			}
			string=string.replace(string[0], "");
		}
		return cipher
	};
	this.set_cipher = (string="example", count=1, array_of_setting={'ru':true, 'en':true, 'num':true, 'caps':true}) => {
		var ru      = array_of_setting['ru'] === true ? ["а", "б", "в", "г", "д", "е", "ё", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"] : [],
			en      = array_of_setting['en'] === true ? ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] : [],
			num     = array_of_setting['num'] === true ? ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] : [];
		var symbols = Array().concat(ru, en, num);
		let cipher = [[], []];
		while (string != "") {
			if (cipher[0].indexOf(string[0]) == -1) {
				cipher[0].push(string[0]);
				var replacer = "";
				for (let i = 0; i < count; i++) {
					if (array_of_setting['caps'] === true) {
						if (parseInt(Math.random()*100)%2==1) {
							replacer+=String(symbols[parseInt(Math.random()*1000)%(symbols.length+1)]).toLocaleUpperCase();
						}
						else {
							replacer+=String(symbols[parseInt(Math.random()*1000)%(symbols.length+1)]);
						}
					}
					else {
						replacer+=String(symbols[parseInt(Math.random()*1000)%(symbols.length+1)]);
					}
				}
				cipher[1].push(replacer);
			}
			string=string.replace(string[0], "");
		}
		return cipher
	}
};