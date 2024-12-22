/* eslint-disable @typescript-eslint/no-explicit-any */

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="border-b-[3px] border-[#C4C4C4D6]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className=" py-7 text-left text-2xl font-semibold text-black capitalize"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b-[3px] border-[#C4C4C4D6]"
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="py-8 text-xl text-black"
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
