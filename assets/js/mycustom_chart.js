$(function () {
	$('#container').highcharts({
		chart: {
			polar: true,
			type: 'area',
		},
		plotOptions: {
			column: {
				colorByPoint: true,
			},
		},
		colors: ['#40a3b8', '#40a3b8'],
		title: {
			text: 'Cloud, Automation, Languages, Tooling',
			//x: -80,
		},
		pane: {
			size: '80%',
		},
		xAxis: {
			categories: [
				'vRealize Suite',
				'VMware',
				'Dell MX7k',
				'JavaScript',
				'PowerShell',
				'YAML',
				'Terraform',
				'Docker',
				'REST',
				'AWS',
			],
			tickInterval: 0,
			min: 0,
			max: 10,
			tickmarkPlacement: 'off',
			lineWidth: 0,
		},
		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			min: 0,
		},
		tooltip: {
			shared: true,
			pointFormat: '{series.name}: <b>{point.y:,.0f}</b><br/>',
		},
		series: [
			{
				name: 'Experience',
				data: [8, 6, 8, 6, 4, 8, 6, 8, 7, 4],
				pointPlacement: 'on',
				//fillColor: 'Blue Gray',
				fillOpacity: 0.6,
			},
		],
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		exporting: {
			enabled: false,
		},
	});
});
