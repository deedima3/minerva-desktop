import React from "react";
import { TableProps } from "../../interfaces/table.interface";
import CustomButton from "../Button/CustomButton";

const Table = ({
  extraClassContainer,
  extraClassTable,
  data,
  columns,
  button,
}: TableProps) => {
  return (
    <div
      className={`rounded-md p-5 w-full ${extraClassContainer} text-white`}
    >
      <table
        className={`${extraClassTable} table-auto`}
      >
        <thead className="md:border-b-2 border-brand-secondary">
          <tr>
            {columns.map((column, index) => {
              return (
                <th className="font-bold text-lg pb-2" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr className="even:bg-brand-black-primary" key={index}>
                {row.map((column, index) => {
                  return (
                    <th className="font-thin text-sm pb-3 pt-3.5" key={index}>
                      {column}
                    </th>
                  );
                })}
                <th className="pt-3.5">
                  {button}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
