// components/TableComponent.tsx
import React from "react";

interface TableComponentProps {
  headings: string[];
  rows: string[][];
}

function TableComponent({ headings, rows }: TableComponentProps) {
  return (
    <div className="overflow-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                className="border-b py-3 px-4 text-left font-medium text-gray-700"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b py-3 px-4 text-gray-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
