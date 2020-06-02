const suffixes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq"];

class BigNumber {
	constructor(base = 0, exp = 1) {
		this.base = base;
		this.exp = exp;

		while ((this.exp) % 3 != 0) {
			this.exp++;
			this.base /= 10;
		}
	}
	reduce() {
		while (this.base >= 1000)
        {
            this.base /= 1000;
            this.exp += 3;
        }
	}
	toString() {
		this.reduce();
		if(suffixes[parseInt(this.exp == 0 ? 0 : (this.exp + 2) / 3)] == undefined)
		{
			console.log(this.exp == 0 ? 0 : (this.exp + 2) / 3);
			return "inf";
		}
		
		return this.base + suffixes[parseInt(this.exp == 0 ? 0 : (this.exp + 2) / 3)]; //add suffix
	}
}

$(function() {
	$("#big-number-btn").click(() => {
		let n = new BigNumber($("#base-num").val() * 1, $("#exp").val() * 1);
		$("#big-number-text").text(n.toString());
	});
});
