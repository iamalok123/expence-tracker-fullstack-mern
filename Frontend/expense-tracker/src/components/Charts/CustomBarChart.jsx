// import React from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
//     Cell
// } from "recharts";
// import CustomTooltip from "./CustomTooltip";
// import { data } from "react-router-dom";

// const CustomBarChart = ({data}) => {

//     // Function to alternate bar colors
//     const getBarColor = (index) => {
//         return index % 2 === 0 ? "#875cf5" : "#cfbefb";
//     }

//     const CustomTooltip = ({active , payload}) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//                     <p className="text-xs font-semibold text-purple-800 mb-1">
//                         {payload[0].payload.category}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                         Amount: <span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
//                     </p>
//                 </div>
//             );
//         }
//         return null ;
//     };

//     return (
//         <div className="bg-white mt-6">
//             <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={data}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis 
//                         dataKey="month" 
//                         tick={{fontSize: 12 , fill: "#555"}} stroke="none" 
//                     />
//                     <YAxis 
//                         tick={{fontSize: 12 , fill: "#555"}} stroke="none"
//                     />
//                     <Tooltip content={CustomTooltip}/>
//                     <Bar 
//                         dataKey="amount"
//                         fill="#FF8042"
//                         radius={[10, 10, 0, 0]}
//                         activeDot={{ r: 8 , fill: "yellow"}}
//                         activeStyle={{fill: "green"}}
//                     >
//                             {data.map((entry , index) => {
//                                 <Cell 
//                                     key={index}
//                                     fill={getBarColor(index)}
//                                 />
//                             })}
//                     </Bar>
//                 </BarChart>
//             </ResponsiveContainer>
            
//         </div>
//     )
// }

// export default CustomBarChart









import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// ✅ Custom hook for responsive behavior
const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
};

const CustomBarChart = ({ data = [] }) => {
    const gradientId = "purpleGradient";
    const isMobile = useIsMobile();

    // ✅ Detect key type dynamically (category or source)
    const labelKey =
        data.length > 0
            ? data[0].category
                ? "category"
                : data[0].source
                ? "source"
                : "name"
            : "category";

    // ✅ Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const item = payload[0].payload;
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
                    <p className="text-xs font-semibold text-purple-800 mb-1">
                        {item[labelKey]}
                    </p>
                    <p className="text-sm text-gray-600">
                        Amount:{" "}
                        <span className="text-sm font-medium text-gray-900">
                            ${item.amount}
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    // ✅ Dynamic bar width logic (auto adjusts based on data length)
    const calculateBarSize = () => {
        const count = data.length || 1;
        if (isMobile) {
            if (count <= 3) return 35;
            if (count <= 6) return 25;
            if (count <= 10) return 20;
            return 15;
        } else {
            if (count <= 3) return 60;
            if (count <= 6) return 45;
            if (count <= 10) return 35;
            return 25;
        }
    };

    return (
        <div className="bg-white w-full h-[300px] sm:h-[350px] md:h-[400px] mt-4 rounded-xl p-2 select-none">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 10, left: 0, bottom: 30 }}
                    barGap={8}
                >
                    {/* ✅ Gradient Definition */}
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#875cf5" stopOpacity={1} />
                            <stop offset="100%" stopColor="#9b6ef6" stopOpacity={1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />

                    {/* ✅ X-Axis (auto text rotation for mobile) */}
                    <XAxis
                        dataKey={labelKey}
                        tick={{
                            fontSize: isMobile ? 9 : 11,
                            fill: "#555",
                        }}
                        interval={0}
                        angle={isMobile ? -25 : 0}
                        dy={10}
                        textAnchor={isMobile ? "end" : "middle"}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        tick={{ fontSize: 11, fill: "#555" }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    {/* ✅ Bar with gradient + no black highlight or focus effect */}
                    <Bar
                        dataKey="amount"
                        fill={`url(#${gradientId})`}
                        radius={[10, 10, 0, 0]}
                        barSize={calculateBarSize()} // 🔥 auto width control
                        isAnimationActive={true}
                        activeBar={false}
                        style={{
                            outline: "none", // removes highlight outline
                            filter: "none", // removes shadow highlight
                            transition: "all 0.3s ease-in-out",
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;

