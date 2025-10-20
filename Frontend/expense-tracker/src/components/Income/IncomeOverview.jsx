import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const IncomeOverview = ({ transactions = [], onAddIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (transactions && transactions.length > 0) {
            const result = prepareIncomeBarChartData(transactions);
            setChartData(result);
        } else {
            setChartData([]);
        }
    }, [transactions]);

    return (
        <div className="card">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-lg font-medium">Income Overview</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        Track your earnings over time and analyze your income trends.
                    </p>
                </div>

                <button
                    className="add-btn flex items-center gap-1 hover:opacity-80 transition"
                    onClick={onAddIncome}
                >
                    <LuPlus className="text-lg" />
                    Add Income
                </button>
            </div>

            {/* Chart */}
            <div className="mt-10">
                <CustomBarChart data={chartData} />
            </div>
        </div>
    );
};

export default IncomeOverview;
