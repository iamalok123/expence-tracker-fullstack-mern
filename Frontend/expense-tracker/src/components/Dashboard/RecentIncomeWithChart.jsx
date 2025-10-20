import React, { useMemo } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const RecentIncomeWithChart = ({ data = [] }) => {
    const COLORS = ["#075C5F", "#F52C3F", "#FF6B00", "#44391F"];

    // Prepare chart data
    const chartData = useMemo(() => {
        return data.map((item) => ({
            name: item?.source || "Unknown",
            amount: Number(item?.amount) || 0,
        }));
    }, [data]);

    // Calculate total
    const totalIncome = chartData.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="card w-full h-auto flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-2">
                <h5 className="text-lg font-semibold">Last 60 Days Income</h5>
            </div>

            <div className="w-full flex justify-center items-center">
                <CustomPieChart
                    data={chartData}
                    label="Total Income"
                    totalAmount={`$${totalIncome}`}
                    showTextAnchor
                    colors={COLORS}
                    responsive
                    disableHoverEffect
                />
            </div>
        </div>
    );
};

export default RecentIncomeWithChart;
