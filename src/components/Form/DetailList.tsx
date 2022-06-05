import React from "react";

interface DetailField {
  field: string[];
  data : any;
}

const DetailList = ({
  field,
  data
}: DetailField) => {
  return (
    <div className="flex justify-start gap-x-24 w-full mt-4">
        <div className="text-white font-light text-s ">
            <p>{field} : {data} </p>
        </div>
    </div>
  );
};

export default DetailList;
