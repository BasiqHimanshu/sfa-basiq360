import { BasicBarChart } from "Common/Components/Charts";
import List from "Common/Components/List";
import ProgressCard from "Common/Components/ProgressCard";
import QualifiedEnquiry from "Common/Components/QualifiedEnquiry";
import TotalEnquiry from "Common/Components/TotalEnquiry";
import BorderCard from "Common/Components/UIElement/UiCards/BorderCard";
import React, { useState } from "react";

const salesDataList = [
  { id: 1, period: "Sep - 2025", val: 50000, nature: "Primary" },
  { id: 2, period: "2025 - 2026", val: 120000, nature: "Primary" },
  { id: 3, period: "Sep - 2025", val: 30000, nature: "Secondary" },
  { id: 4, period: "2025 - 2026", val: 90000, nature: "Secondary" },
];

const Analytics = () => {
  const [buttonState, setButtonState] = useState<"Sales" | "Enquiry">("Sales");

  return (
    <React.Fragment>
      {/* Toggle Buttons */}
      <div className="grid grid-cols-12 gap-4 mt-5">
        <button
          type="button"
          onClick={() => setButtonState("Sales")}
          className={`btn col-span-6 ${
            buttonState === "Sales"
              ? "bg-custom-600 text-white"
              : "bg-custom-100 text-custom-500"
          }`}
        >
          Sales
        </button>

        <button
          type="button"
          onClick={() => setButtonState("Enquiry")}
          className={`btn col-span-6 ${
            buttonState === "Enquiry"
              ? "bg-custom-600 text-white"
              : "bg-custom-100 text-custom-500"
          }`}
        >
          Enquiry
        </button>
      </div>

      {/* Sales Section */}
      {buttonState === "Sales" ? (
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-12">
            <BorderCard data={salesDataList} />
          </div>

          {/* Charts side by side on md+ but stacked on mobile */}
          <div className="col-span-12 lg:col-span-6">
            <BasicBarChart chartId="sales-bar" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ProgressCard />
          </div>

          <div className="col-span-12">
            <List />
          </div>
        </div>
      ) : (
        
        <div className="card-body grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-12 lg:col-span-6">
            <TotalEnquiry />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <QualifiedEnquiry />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Analytics;
