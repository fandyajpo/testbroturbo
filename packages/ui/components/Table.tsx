import React from "react";

interface IColumn {
  name: string;
  cell: (row: { [key: string]: any }) => React.ReactNode;
}

interface ITableProps {
  data: { [key: string]: any }[];
  columns: IColumn[];
}

export const Table: React.FC<ITableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((column: any, index: any) => (
              <th key={index} className="px-4 py-2">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((row: any, rowIndex: any) => (
            <tr key={rowIndex}>
              {columns.map((column: any, columnIndex: any) => (
                <td key={columnIndex} className="border px-4 py-2">
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
