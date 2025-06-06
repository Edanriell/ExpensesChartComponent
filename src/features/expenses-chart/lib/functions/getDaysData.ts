import { faker } from "@faker-js/faker";

type getDaysDataParams = {
	labels: string[];
};

export const getDaysData = ({ labels }: getDaysDataParams) => {
	return labels.map(() => faker.number.float({ min: 150, max: 1000, fractionDigits: 2 }));
};
