import React from "react";
import { TableProps } from "../../interfaces/table.interface";

const Table = ({extraClass, data, columns} : TableProps) => {
  return (
    <div className="bg-brand-black-primary">
      <table>
        <thead>
          <tr>
            {
                columns.map((column, index) => {
                    return (
                        <th key={index}>{column}</th>
                    )
                })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
          {
                data.map((data, index) => {
                    return (
                        <th key={index}>{data}</th>
                    )
                })
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
