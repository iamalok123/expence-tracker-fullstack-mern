// Type-1

// import React from "react";
// import {
//     LuUtensils,
//     LuTrendingUp,
//     LuTrendingDown,
//     LuTrash2,
// } from "react-icons/lu";

// const TransactionInfoCard = ({
//     title,
//     icon,
//     date,
//     amount,
//     type,
//     hideDeleteBtn,
// }) => {
//     const getAmountStyles = () =>
//         type === "income"
//             ? "bg-green-50 text-green-500"
//             : "bg-red-50 text-red-500";

//     return (
//         <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
//             {/* Icon */}
//             <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
//                 {icon ? (
//                     <img src={icon} alt={title} className="w-6 h-6" />
//                 ) : (
//                     <LuUtensils />
//                 )}
//             </div>

//             {/* Transaction Details */}
//             <div className="flex-1 flex items-center justify-between">
//                 <div>
//                     <p className="text-sm text-gray-700 font-medium">{title}</p>
//                     <p className="text-xs text-gray-400 mt-1">{date}</p>
//                 </div>

//                 {/* Action Buttons & Amount */}
//                 <div className="flex items-center gap-2">
//                     {!hideDeleteBtn && (
//                         <button
//                             className="text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//                             onClick={onDelete}
//                         >
//                             <LuTrash2 size={18} />
//                         </button>
//                     )}

//                     <div
//                         className={`flex items-center gap-2 px-3 py-1.5 rounded ${getAmountStyles()}`}
//                     >
//                         <h6 className="text-xs font-medium">
//                             {type === "income" ? "+" : "-"} ${amount}
//                         </h6>
//                         {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TransactionInfoCard;






// Type-2

import React from "react";
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete
}) => {
    const getAmountStyles = () =>
        type === "income"
            ? "text-green-500"
            : "text-red-500";

    return (
        <div className="group relative flex items-center justify-between gap-4 mt-3 p-3 rounded-xl hover:bg-gray-100/70 transition">
            {/* Left: Icon */}
            <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full shrink-0">
                {icon ? (
                    <img src={icon} alt={title} className="w-6 h-6" />
                ) : (
                    <LuUtensils />
                )}
            </div>

            {/* Middle: Transaction Details */}
            <div className="flex flex-col flex-1 ml-2">
                <p className="text-sm text-gray-700 font-medium">{title}</p>
                <p className="text-xs text-gray-400 mt-1">{date}</p>
            </div>

            {/* Right: Amount and Actions */}
            <div className="flex items-center gap-3 shrink-0">
                {!hideDeleteBtn && (
                    <button
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={onDelete}
                    >
                        <LuTrash2 size={16} />
                    </button>
                )}

                <div className={`flex items-center gap-1.5 ${getAmountStyles()}`}>
                    <h6 className="text-sm font-semibold">
                        {type === "income" ? "+" : "-"}${amount}
                    </h6>
                    {type === "income" ? (
                        <LuTrendingUp size={16} />
                    ) : (
                        <LuTrendingDown size={16} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoCard;
