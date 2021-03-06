import * as DOM from "../js/domUtils.js";

const apiKey = "AIzaSyBXen8zmkeoWxsiQ_2WTE7Hre749E6_Kjo";
const videoId = "zpK1YXbbCbA&t";

async function loadData() {
	//get data
	const req = await fetch(
		"https://www.googleapis.com/youtube/v3/commentThreads?key=" +
			apiKey +
			"&videoId=" +
			videoId +
			"&part=snippet",
	);
	const json = await req.json();
	console.log(json);

	//filter data
	let commentDomContainer = document.getElementById("comments");
	let comments = json.items.map(n => n.snippet.topLevelComment.snippet);
	comments.sort((a, b) => b.likeCount - a.likeCount); //sort the array by likeCount
	let commentLabels = [];

	for (let i = 0; i < 20; i++) {
		if (i >= comments.length) break;
		commentLabels.push([
			DOM.parseImg(comments[i].authorProfileImageUrl, "profile picture", [
				"padding-10",
			]),
			comments[i].authorDisplayName,
			comments[i].textDisplay,
			comments[i].likeCount + " likes",
		]);
	}

	//display data
	commentDomContainer.innerHTML = DOM.parseSimpleTable(commentLabels, [
		"padding-10",
	]);
}

loadData();
