

type SalesData = {
  id: number;
  period: string; 
  val: number;
  nature: "Primary" | "Secondary" | string;
};

const BorderCard = ({ data }: { data: SalesData[] }) => {
  const colorMap: Record<string, string> = {
    Primary:
      "bg-green-100 text-green-500 dark:bg-green-500/20 dark:text-green-400",
    Secondary:
      "bg-red-100 text-red-500 dark:bg-red-500/20 dark:text-red-400",
  };

  return (
    <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => {
        const isPrimary = item.nature === "Primary";
        const title = `${isPrimary ? "Primary Sales" : "Secondary Sales"} - ${item.period}`;

        return (
          <div
            key={item.id}
            className="border card border-custom-100 dark:border-custom-800"
          >
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-15">{title}</h6>
                <span
                  className={`px-2.5 py-0.5 inline-block text-xs font-medium rounded-full border border-transparent ${colorMap[item.nature]}`}
                >
                  {isPrimary ? "Primary" : "Secondary"}
                </span>
              </div>

              <div className="flex justify-between mt-10">
                <div>
                    <h2 className="text-base font-semibold">Target</h2>
                    <h4 className="text-lg font-bold">₹ {item.val}</h4>
                </div>
                <div>
                    <h2 className="text-base font-semibold">Achievements</h2>
                    <h4 className="text-lg font-bold">₹ {item.val}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BorderCard;
