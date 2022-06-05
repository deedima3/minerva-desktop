import React, { useEffect, useState } from "react";
import adminReaderApi from "../../api/admin/adminReaderApi";
import user from "../../static/userprofile.svg";

interface Props {
  name : string,
  title : string,
  exp? : any
}

const UserReturnCard = ({name, title, exp}: Props) => {

  return (
    <div className="flex bg-brand-black-secondary rounded-md p-6">
      <img src={user} alt="user picture" className="rounded-full w-16" />
      <div className="flex flex-col ml-2 justify-between">
        <h4 className="text-md text-white font-bold">
          {name}
        </h4>
        <h5 className="text-xs text-white font-thin">
          {title}
        </h5>
        <h6 className="text-xs text-white font-thin">
          Limit : {exp}
        </h6>
      </div>
    </div>
  );
};

export default UserReturnCard;
