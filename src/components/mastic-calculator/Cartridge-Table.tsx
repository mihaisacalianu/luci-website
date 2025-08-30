import { depthValues, tableData, widthValues } from "@/lib";

interface CartridgeTableProps {
  className?: string;
}

export function CartridgeTable({ className }: CartridgeTableProps) {
  return (
    <div className={`bg-slate-700 p-6 rounded-lg shadow-lg ${className}`}>
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-6 tracking-wide">
        METRES PER 310ML CARTRIDGE
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header Row */}
          <thead>
            <tr>
              <th className="bg-slate-800 text-white p-3 text-center font-bold border border-slate-600">
                <div>DEPTH (mm)</div>
              </th>
              <th
                colSpan={widthValues.length}
                className="bg-slate-800 text-white p-3 text-center font-bold border border-slate-600"
              >
                WIDTH (mm)
              </th>
            </tr>
            <tr>
              <th className="bg-slate-800 text-white p-3 text-center font-bold border border-slate-600">
                {/* Empty cell for depth label */}
              </th>
              {widthValues.map((width) => (
                <th
                  key={width}
                  className="bg-slate-800 text-white p-3 text-center font-bold border border-slate-600 min-w-[60px]"
                >
                  {width}
                </th>
              ))}
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody>
            {depthValues.map((depth, rowIndex) => (
              <tr key={depth}>
                {/* Depth label */}
                <td className="bg-slate-800 text-white p-3 text-center font-bold border border-slate-600">
                  {depth}
                </td>
                {/* Data cells */}
                {tableData[rowIndex].map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={`p-3 text-center font-medium border border-slate-400 ${
                      (rowIndex + colIndex) % 2 === 0
                        ? "bg-slate-300 text-slate-900"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
