//return a string representing an html img element with src, alt and specified classes
export const parseImg = (src, alt, classes = []) =>
	`<img src="${src}" alt="${alt}" class="${classes.join(" ")}"/>`;

//return a string representing an html table made of td tags with the specified classes
export function parseSimpleTable(matrix, tdClasses = []) {
	let html = `<table>`;
	for (let ely of matrix) {
		html += "<tr>";
		for (let elx of ely) {
			html += `<td class="${tdClasses.join(" ")}">${elx}</td>`;
		}
		html += "</tr>";
	}
	return html;
}
