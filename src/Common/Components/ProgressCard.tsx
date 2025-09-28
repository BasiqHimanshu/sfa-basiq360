

const ProgressCard = () => {
  return (
    <div className="card border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">
        <div className="card-body">
            <h6 className="mb-3 text-xl">CheckIn</h6>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h6 className="mb-0">Distributor</h6>
                    <h6 className="mb-0 text-custom-500">24</h6>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div className="bg-custom-500 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h6 className="mb-0">Dealer</h6>
                    <h6 className="mb-0 text-green-500">66</h6>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "66%" }}></div>
                </div>
            </div>
             <div>
                <div className="flex items-center justify-between mb-2">
                    <h6 className="mb-0">Direct Dealer</h6>
                    <h6 className="mb-0 text-yellow-500">32</h6>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div className="text-yellow-500 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                </div>
            </div>
        </div>
        <div className="px-4">
            <h5 className="mb-5">Total Number of Visits</h5>
            <div className="grid grid-cols-1 gap-x-5">
                <div className="card bg-custom-500 border-custom-500 dark:bg-custom-800 dark:border-custom-800">
                    <div className="card-body">
                        <h6 className="mb-2 text-white text-15">
                            Custom Card
                        </h6>
                        <h6 className="mb-2 text-white text-15">
                            0
                        </h6>
                        <p className=" dark:text-custom-300 text-custom-200">
                            Total Number of checkins within the month
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressCard
