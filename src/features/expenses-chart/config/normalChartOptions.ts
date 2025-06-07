import { getChartOptions } from "../lib/functions";

export const normalChartOptions = getChartOptions({
	chartOptions: {
		plugins: {
			tooltip: {
				bodyFont: {
					size: 18,
					lineHeight: "125%"
				}
			},
			title: {
				font: {
					size: 32
				},
				padding: {
					bottom: 64
				}
			}
		},
		scales: {
			x: {
				ticks: {
					font: {
						size: 15
					}
				}
			}
		}
	}
});
