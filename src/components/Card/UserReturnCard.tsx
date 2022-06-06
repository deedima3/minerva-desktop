import React from "react";
import user from "../../static/userprofile.svg";

interface Props {
  image : string
  name : string
  bookTitle : string
  expired : string
}

const UserReturnCard = ({image, name, bookTitle, expired} : Props) => {
  return (
    <div className="flex bg-brand-black-secondary rounded-md p-6">
      <img src={user} alt="user picture" className="rounded-full w-16" />
      <div className="flex flex-col ml-2 justify-between">
        <h4 className="text-md text-white font-bold">
          Sagung Githa Abednigo
        </h4>
        <h5 className="text-xs text-white font-thin">
          Sebuah seni untuk bersikap bodo amat
        </h5>
        <h6 className="text-xs text-white font-thin">
          Limit : 20 Januari 2022
        </h6>
      </div>
    </div>
  );
};

export default UserReturnCard;
