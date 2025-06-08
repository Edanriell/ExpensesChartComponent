import { faker } from "@faker-js/faker";

type getExpensesDataParams = {
	max: number;
};

export const getExpensesData = ({ max }: getExpensesDataParams) => {
	return faker.number.float({ min: 0, max, fractionDigits: 2 });
};
