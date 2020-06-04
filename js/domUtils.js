export const parseUnLi = arr =>
	"<ul><li>" + arr.join("</li><li>") + "</li></ul>";

export const parseImg = (src, alt, classes = []) =>
	`<img src="${src}" alt="${alt}" class="${classes.join(" ")}"/>`;

export function parseSimpleTable(matrix, tdClasses = []) {
	let html = `<table>`;
	for (let ely of matrix) {
		html += "<tr>";
		for (let elx of ely) {
			html += `<td class="${tdClasses.join(" ")}">${elx}</td>`;
		}
		html += "</tr>"
	}
	return html;
}
