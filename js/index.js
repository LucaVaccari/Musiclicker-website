$(function() {
	let chart = new Chart($("#skills"), {
		type: "radar",
		data: {
			labels: [
				"Design",
				"Coding",
				"3D graphics",
				"2D graphics",
				"Animation",
				"Visual effects",
				"Sound effects",
				"Music",
			],
			datasets: [
				{
					label: "Skill rating",
					data: [8.5, 8.7, 4, 3.5, 6, 6.5, 8.5, 8.5],
					backgroundColor: "rgba(155, 89, 182,0.2)",
					borderColor: "#8e44ad",
				},
			],
		},
		options: {
			scale: {
				gridLines: {
					circular: true,
				},
				pointLabels: {
					display: true,
					fontSize: 13,
				},
				ticks: {
					min: 0,
					max: 10,
					maxTicksLimit: 0,
					showLabelBackdrop: false,
					callback: (value, index, values) => "",
				},
			},
		},
	});
});
