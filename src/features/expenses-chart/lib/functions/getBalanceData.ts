import { faker } from "@faker-js/faker";

export const getBalanceData = () => {
	return faker.number.float({ min: 0, max: 4500, fractionDigits: 2 });
};
