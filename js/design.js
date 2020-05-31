$(function() {
	let ctx = $("#musician-graph");
	let chart = new Chart(ctx, {
		type: "line",
		data: {
			datasets: [
				{
					label: "Notes per second",
					data: [0.1, 0.2],
				},
				{
					label: "Notes for level up",
					data: [0.2, 0.5],
				},
			],
		},
		options: {},
	});
});
