import "./styles.less";

import { Bar } from "react-chartjs-2";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from "chart.js";

import {
	getBalanceData,
	getBarColors,
	getDaysData,
	getExpensesData,
	getExpensesIncreaseData
} from "../lib/functions";
import { chartLabels, chartOptions } from "../config";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const ExpensesChart = () => {
	const chartData = {
		labels: chartLabels,
		datasets: [
			{
				label: "Spending - Last 7 days",
				data: getDaysData({ labels: chartLabels }),
				...getBarColors({ labels: chartLabels })
			}
		]
	};

	return (
		<section className="expenses-chart-section">
			<header className="expenses-chart-section__chart-header chart-header">
				<dl className="chart-header__balance-data balance-data">
					<dt className="balance-data__title">My balance</dt>
					<dd className="balance-data__current-balance">${getBalanceData()}</dd>
				</dl>
				<svg
					className="chart-header__chart-icon"
					width="73"
					height="49"
					viewBox="0 0 73 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="48.5" cy="24.5" r="24" fill="#382314" />
					<circle cx="24.5" cy="24.5" r="23" stroke="white" strokeWidth="2" />
				</svg>
			</header>
			<div className="expenses-chart-section__expenses-chart expenses-chart">
				<h3 className="expenses-chart__title">Spending - Last 7 days</h3>
				<Bar width={280} height={204} data={chartData} options={chartOptions} />
				<footer className="expenses-chart__chart-footer chart-footer">
					<div className="chart-footer__splitter"></div>
					<div className="chart-footer__data">
						<dl className="chart-footer__expenses-data expenses-data">
							<dt className="expenses-data__title">Total this month</dt>
							<dd className="expenses-data__current-expenses">
								${getExpensesData({ max: getBalanceData() })}
							</dd>
						</dl>
						<dl className="chart-footer__expenses-increase-data expenses-increase-data">
							<dt className="expenses-increase-data__title">from last month</dt>
							<dd className="expenses-increase-data__current-expenses-increase">
								+{getExpensesIncreaseData()}%
							</dd>
						</dl>
					</div>
				</footer>
			</div>
		</section>
	);
};

// TODO
// Responsivness
