
import ReactApexChart from "react-apexcharts";

const RadialChart = ({ chartId, label, value, total, color }: any) => {

  const series = [(value / total) * 100]; 
  const options: any = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
        dataLabels: {
          show: true,
          name: { show: true, fontSize: "14px " },
          value: {
            formatter: () => `${value}`,
            fontSize: "12px",
          },
        },
      },
    },
    colors: [color],
    labels: [label],
  };

  return (
    <ReactApexChart
      dir="ltr"
      options={options}
      series={series}
      id={chartId}
      className="apex-charts"
      height={170}
      type="radialBar"
    />
  );
};

const QualifiedEnquiry = () => {
  const qualifiedData = [
    { label: "Win", count: 22, color: "#22c55e", textColor: "text-green-500" },
    { label: "Lost", count: 10, color: "#ef4444", textColor: "text-red-500" },
    {
      label: "In Process",
      count: 15,
      color: "#eab308",
      textColor: "text-yellow-500",
    },
  ];

  const total = qualifiedData.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="card border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">

      <div className="px-4">
        <div className="flex justify-between">
          <h5 className="mb-5 pt-4">Total Enquiry</h5>
          <h5 className="mb-5 pt-4">{total}</h5>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {qualifiedData.map((item, index) => (
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
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          {qualifiedData.map((item, index) => (
            <div key={index} className="flex-1 flex justify-center">
              <RadialChart
                chartId={`radial-${index}`}
                label={item.label}
                value={item.count}
                total={total}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};

export default QualifiedEnquiry;
