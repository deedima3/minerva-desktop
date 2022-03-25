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
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th className="font-bold text-lg" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr className="even:bg-brand-black-secondary" key={index}>
                {row.map((column, index) => {
                  return (
                    <th className="font-thin text-sm" key={index}>
                      {column}
                    </th>
                  );
                })}
                <th>
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
