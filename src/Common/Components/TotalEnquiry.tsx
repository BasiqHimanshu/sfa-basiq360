import React from "react";




const TotalEnquiry = () => {
  return (
    <div className="card border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">
      <div className="px-4">
        <h5 className="mb-5 pt-4">Total Enquiry</h5>
        <div className="flex justify-between">
          <div className="card border w-44 border-custom-100 dark:border-custom-800">
            <div className=" card-body ">
              <div className="mb-2 items-center text-15">Qualified</div>
              <div className="mb-2 items-center text-15">0</div>
            </div>
          </div>

          <div className="card border w-44 border-custom-100 dark:border-custom-800">
            <div className=" card-body ">
              <div className="mb-2 items-center text-15">Qualified</div>
              <div className="mb-2 items-center text-15">0</div>
            </div>
          </div>

          <div className="card border w-44 border-custom-100 dark:border-custom-800">
            <div className=" card-body ">
              <div className="mb-2 items-center text-15">Qualified</div>
              <div className="mb-2 items-center text-15">0</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="mb-3 text-xl">Total Enquiry</div>
        <div className="flex-row justify-between">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="mb-0">Qualified</div>
                    <div className="mb-0 text-custom-500">22</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div
                    className="bg-custom-500 h-2.5 rounded-full"
                    style={{ width: "22%" }}
                    ></div>
                </div>
                </div>
                <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="mb-0">Qualified</div>
                    <div className="mb-0 text-custom-500">22</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div
                    className="bg-custom-500 h-2.5 rounded-full"
                    style={{ width: "22%" }}
                    ></div>
                </div>
                </div>
                <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="mb-0">Qualified</div>
                    <div className="mb-0 text-custom-500">22</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-zink-600">
                    <div
                    className="bg-custom-500 h-2.5 rounded-full"
                    style={{ width: "22%" }}
                    ></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEnquiry;
