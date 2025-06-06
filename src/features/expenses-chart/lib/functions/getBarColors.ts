type getBarsColorsParams = {
	labels: string[];
};

export const getBarColors = ({ labels }: getBarsColorsParams) => {
	const currentDay = new Date().getDay();

	const backgroundColor = labels.map((_, index) =>
		++index === currentDay ? "#88bfc5" : "#ec755d"
	);

	const hoverBackgroundColor = labels.map((_, index) =>
		++index === currentDay ? "#bee4e8" : "#ffa896"
	);

	return {
		backgroundColor,
		hoverBackgroundColor
	};
};
