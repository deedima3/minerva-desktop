import React from "react";

export interface ModalProps {
  thing: string;
  word: string;
}

const ConfirmCard = ({thing, word}: ModalProps) => {
  return (
    <div className="flex justify-center">
    <div className="bg-brand-neutral rounded-md w-5/6 items-center gap-2 pt-2">
      <h3 className="text-xl font-semibold text-brand-black-secondary md:border-b border-grey-800 py-2 pl-6">
          Confirm Delete</h3>
        <p className="pt-2 pl-6"> Are you sure want to delete this {thing}? 
            You CAN NOT view this {word} in your list anymore if you delete it.</p>
        <div className="flex text-base gap-2 justify-end mx-8 mt-3">
          <button className="bg-brand-primary py-1 px-5 mb-6 rounded-lg">Cancel</button>
          <button className="bg-red-500 py-1 px-5 mb-6 rounded-lg text-white">Delete</button>
        </div>
    </div>
    </div>
  );
};

export default ConfirmCard;