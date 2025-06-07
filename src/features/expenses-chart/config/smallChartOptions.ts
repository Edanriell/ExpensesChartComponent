import { getChartOptions } from "../lib/functions";

export const smallChartOptions = getChartOptions({
	chartOptions: {
		plugins: {
			tooltip: {
				bodyFont: {
					size: 14,
					lineHeight: "135%"
				}
			},
			title: {
				font: {
					size: 24
				},
				padding: {
					bottom: 56
				}
			}
		},
		scales: {
			x: {
				ticks: {
					font: {
						size: 12
					}
				}
			}
		}
	}
});
