const suffixes = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "aa", "bb", "cc"];

class BigNumber {
	constructor(base = 0, exp = 1) {
		this.base = base;
		this.exp = exp;

		while ((this.exp - 1) % 3 != 0) {
			this.exp++;
			this.base /= 10;
		}
	}
	reduce() {
		while (this.base > 999) {
			this.base /= 1000;
			this.exp += 3;
		}
	}
	toString() {
		this.reduce();
		if(suffixes[this.exp == 0 ? 0 : (this.exp + 2) / 3] == undefined)
			return "inf";
		
		return this.base + suffixes[this.exp == 0 ? 0 : (this.exp + 2) / 3]; //add suffix
	}
}

$(function() {
	$("#big-number-btn").click(() => {
		let n = new BigNumber($("#base-num").val() * 1, $("#exp").val() * 1);
		console.log(n.toString());
	});
});
