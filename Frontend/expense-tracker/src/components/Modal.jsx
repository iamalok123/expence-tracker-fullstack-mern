// import React from 'react'

// const Modal = ({ children, isOpen, onClose, title }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
//             {/* Modal Box */}
//             <div className="relative w-full max-w-2xl mx-4 sm:mx-0">
//                 <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    
//                     {/* Header */}
//                     <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                             {title}
//                         </h3>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg w-8 h-8 flex justify-center items-center transition"
//                         >
//                             <svg
//                                 className="w-3.5 h-3.5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 14 14"
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
//                                 />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Body */}
//                     <div className="p-4">
//                         {children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;








import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm ">
        {/* Modal Box */}
            <div className="relative w-full max-w-2xl mx-4 sm:mx-0">
                <div className="relative bg-white rounded-xl shadow-lg">
                
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {title}
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 rounded-lg w-8 h-8 flex justify-center items-center transition"
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-4 text-gray-900">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
