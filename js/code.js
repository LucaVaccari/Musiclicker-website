const suffixes = [
	"",
	"K",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y",
	"aa",
	"bb",
	"cc",
	"dd",
	"ee",
	"ff",
	"gg",
	"hh",
	"ii",
	"jj",
	"kk",
	"ll",
	"mm",
	"nn",
	"oo",
	"pp",
	"qq",
];

class BigNumber {
	constructor(base = 0, exp = 1) {
		this.base = base;
		this.exp = exp; //exp of 10, multiplier of base

		//make the exponent divisible by 3
		while (this.exp % 3 != 0) {
			this.exp++;
			this.base /= 10;
		}
	}
	reduce() {
		while (this.base >= 1000) {
			this.base /= 1000;
			this.exp += 3;
		}
	}
	toString() {
		this.reduce();
		if (
			suffixes[parseInt(this.exp == 0 ? 0 : (this.exp + 2) / 3)] ==
			undefined
		) {
			return "inf"; //if the number is too big it returns inf
		}

		return (
			this.base.toFixed(2) +
			suffixes[parseInt(this.exp == 0 ? 0 : (this.exp + 2) / 3)]
		); //add suffix
	}
}

$(function() {
	const printParsedNum = () => {
		let n = new BigNumber($("#base-num").val() * 1, $("#exp").val() * 1);
		$("#big-number-text").text(n.toString());
	};
	$("#base-num").change(printParsedNum);
	$("#exp").change(printParsedNum);
});
