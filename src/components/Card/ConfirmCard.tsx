import React from "react";

export interface ModalProps {
  thing: string;
  word: string;
  handleCancel? : () => void;
  handleConfirm? : () => void;
}

const ConfirmCard = ({thing, word, handleCancel, handleConfirm}: ModalProps) => {
  return (
    <div className="flex justify-center">
    <div className="bg-brand-neutral rounded-md w-5/6 items-center gap-2 pt-2 font-inter">
      <h3 className="text-xl font-semibold text-brand-black-secondary md:border-b border-grey-800 py-2 pl-6">
          Confirm Delete</h3>
        <p className="pt-2 pl-6 text-brand-black-primary"> Are you sure you want to delete this {thing}? 
            You CAN NOT view this {word} in your list anymore if you delete it.</p>
        <div className="flex gap-2 justify-end mx-8 mt-3 items-center">
          <button onClick={handleCancel} className="bg-brand-primary py-1 px-5 mb-6 rounded-lg md: hover:bg-brand-secondary">Cancel</button>
          <button onClick={handleConfirm} className="bg-red-500 py-1 px-5 mb-6 rounded-lg text-white hover:bg-red-700">Delete</button>
        </div>
    </div>
    </div>
  );
};

export default ConfirmCard;