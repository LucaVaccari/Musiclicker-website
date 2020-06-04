export const parseUnLi = arr =>
	"<ul><li>" + arr.join("</li><li>") + "</li></ul>";

export const parseImg = (src, alt, classes = []) =>
	`<img src="${src}" alt="${alt}" class="${classes.join(" ")}"/>`;
