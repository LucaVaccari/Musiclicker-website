let singerData = {
	//data of the singer chart
	datasets: [
		{
			label: "Notes per slide",
			data: [1, 2.72, 7.4, 20.15, 54.83],
			backgroundColor: "rgba(46, 204, 113, 0.2)",
			borderColor: "rgba(46, 204, 113, 1.0)",
		},
		{
			label: "Notes for level up",
			data: [3.89, 15.12, 58.77, 228.51],
			backgroundColor: "rgba(231, 76, 60, 0.2)",
			borderColor: "rgba(231, 76, 60, 1)",
		},
	],
	labels: [1, 2, 3, 4],
};
let musicianChart; //declared here because it has to be erased and recreated

$(function() {
	//singer graph
	let singerCTX = $("#singer-graph");
	let singerChart = new Chart(singerCTX, {
		type: "line",
		data: singerData,
	});

	//musician graph
	//data creation
	let npsData = [];
	let nfluData = [];
	for (let i = 1; i <= 3; i++) {
		npsData.push(Math.pow(1.42 + 1.56 / 2.1, i - 1) * 10.4);
		nfluData.push(Math.pow(2.08, i) * 10.2);
	}

	//graph
	let musicianCTX = $("#musician-graph");
	let musicianChart = new Chart(musicianCTX, {
		type: "line",
		data: {
			labels: [1, 2, 3],
			datasets: [
				{
					label: "Notes per second",
					data: npsData,
					backgroundColor: "rgba(46, 204, 113, 0.2)",
					borderColor: "rgba(46, 204, 113, 1.0)",
				},
				{
					label: "Notes for level up",
					data: nfluData,
					backgroundColor: "rgba(231, 76, 60, 0.2)",
					borderColor: "rgba(231, 76, 60, 1)",
				},
			],
		},
	});

	//slider
	$("#grade-slider").on("input", () => {
		let inputVal = $("#grade-slider").val();
		$("#slider-value").text("Musician grade: " + inputVal);

		//generate new data
		npsData = [];
		nfluData = [];
		for (let i = 1; i <= 3; i++) {
			npsData.push(Math.pow(inputVal * 1.42 + 1.56 / 2.1, i - 1) * 10.4);
			nfluData.push(Math.pow(inputVal * 1 + 1.08, i) * 10.2);
		}
		musicianChart.data.datasets[0].data = npsData;
		musicianChart.data.datasets[1].data = nfluData;
		musicianChart.update();
	});
});
