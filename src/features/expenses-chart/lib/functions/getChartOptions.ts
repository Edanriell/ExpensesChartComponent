import { merge } from "lodash";

type chartTooltipOptions = {
	bodyFont: {
		size: number;
		lineHeight: string;
	};
};

type chartTitleOptions = {
	font: {
		size: number;
	};
	padding: {
		bottom: number;
	};
};

type scaleXOptions = {
	x: {
		ticks: {
			font: {
				size: number;
			};
		};
	};
};

type getChartOptionsParams = {
	chartOptions: {
		plugins: {
			tooltip: chartTooltipOptions;
			title: chartTitleOptions;
		};
		scales: scaleXOptions;
	};
};

export const getChartOptions = ({ chartOptions }: getChartOptionsParams) => {
	const baseOptions = {
		responsive: false,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				yAlign: "bottom",
				xAlign: "center",
				displayColors: false,
				caretSize: 0,
				caretPadding: 8,
				backgroundColor: "#382314",
				bodyColor: "#fff",
				bodyFont: {
					size: 14,
					weight: 700,
					lineHeight: "135%",
					family: "DMSans, sans-serif"
				},
				callbacks: {
					title: () => "",
					label: (context: any) => `$${context.parsed.y}`
				}
			},
			title: {
				display: false,
				text: "Spending - Last 7 days",
				align: "start",
				position: "top",
				font: {
					size: 24,
					weight: 700,
					lineHeight: "130%",
					family: "DMSans, sans-serif"
				},
				padding: {
					bottom: 56
				},
				color: "#382314"
			}
		},
		elements: {
			bar: {
				borderRadius: 5,
				borderSkipped: false,
				backgroundColor: "#ec755d",
				hoverBackgroundColor: "#ffa896"
			}
		},
		layout: {
			padding: {
				top: 30
			}
		},
		scales: {
			y: {
				display: false,
				grid: {
					display: false
				}
			},
			x: {
				grid: {
					display: false
				},
				border: {
					display: false
				},
				ticks: {
					color: "#92857a",
					font: {
						size: 12,
						weight: 400,
						lineHeight: "135%",
						textAlign: "center",
						family: "DMSans, sans-serif"
					},
					padding: 8
				}
			}
		}
	};

	return merge(baseOptions, chartOptions);
};
