import { FC } from "react";

import { ExpensesChart } from "@features/expenses-chart/ui";

import { DefaultLayout } from "@widgets/layout/default/ui";

export const HomePage: FC = () => {
	return (
		<DefaultLayout>
			<DefaultLayout.Main>
				<ExpensesChart />
			</DefaultLayout.Main>
		</DefaultLayout>
	);
};
