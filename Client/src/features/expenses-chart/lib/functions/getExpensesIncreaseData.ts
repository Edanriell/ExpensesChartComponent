import { faker } from "@faker-js/faker";

export const getExpensesIncreaseData = () => {
	return faker.number.float({ min: 0, max: 100, fractionDigits: 1 });
};
