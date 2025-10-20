import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpensess = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const result = prepareExpenseBarChartData(data);
            setChartData(result);
        } else {
            setChartData([]);
        }
    }, [data]);

    return (
        <div className="card col-span-1">
            <div className="flex items-center justify-between">
                <h5 className="text-lg font-semibold text-gray-800">
                    Last 30 Days Expenses
                </h5>
            </div>

            <CustomBarChart data={chartData} />
        </div>
    );
};

export default Last30DaysExpensess;
