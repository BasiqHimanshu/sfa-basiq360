

const TotalEnquiry = () => {
  const enquiryData = [
    { label: "Qualified", count: 22, color: "bg-green-500", textColor: "text-green-500" },
    { label: "Disqualified", count: 10, color: "bg-red-500", textColor: "text-red-500" },
    { label: "Pending", count: 15, color: "bg-yellow-500", textColor: "text-yellow-500" },
  ];

  const total = enquiryData.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="card border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">
      <div className="px-4">
        <div className="flex justify-between">
          <h5 className="mb-5 pt-4">Total Enquiry</h5>
          <h5 className="mb-5 pt-4">{total}</h5>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {enquiryData.map((item, index) => (
            <div
              key={index}
              className="card border w-44 border-custom-100 dark:border-custom-800"
            >
              <div className="card-body flex flex-col items-center justify-center text-center">
                <div className={`mb-2 text-xl ${item.textColor}`}>
                  {item.label}
                </div>
                <div className="mb-2 text-lg">{item.count}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="card-body">
        <div className="flex flex-col gap-4">
          {enquiryData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="mb-0">{item.label}</div>
                <div className={`mb-0 ${item.textColor}`}>{item.count}</div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2 dark:bg-zinc-600">
                <div
                  className={`${item.color} h-2.5 rounded-full`}
                  style={{ width: `${(item.count / total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalEnquiry;
