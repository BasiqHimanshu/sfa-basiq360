

const List = () => {

    const orders = [
        {id : 1 , category : "Category 1", primarysales: "2300", secondarysales: "500", total: "2800"},
        {id : 2 , category : "Category 2", primarysales: "4300", secondarysales: "250", total: "4550"},
        {id : 3 , category : "Category 3", primarysales: "1700", secondarysales: "800", total: "2500"},
        {id : 4 , category : "Category 4", primarysales: "2300", secondarysales: "500", total: "2800"},
        {id : 5 , category : "Category 5", primarysales: "2300", secondarysales: "500", total: "2800"},
    ]

    return (
    <div className="card border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">
        <div className="card-body">
            <h6 className="mb-4 text-15">Category Wise Sale</h6>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Category</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Primary Sales</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Secondary Sales</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Total</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) =>(
                            <tr>
                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{order.category}</a></td>
                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{order.primarysales}</a></td>
                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{order.secondarysales}</a></td>
                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">{order.total}</a></td>
                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default List
