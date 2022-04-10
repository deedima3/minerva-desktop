import React from "react";

export interface ModalFormProps {
  title: string;
  handleCancel?: () => void;
  handleConfirm?: () => void;
  handleSubmit: () => void;
  children: JSX.Element;
}

const ModalsForm = ({
  title,
  handleCancel,
  handleConfirm,
  children,
  handleSubmit
}: ModalFormProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-brand-neutral rounded-md px-10 items-center gap-2 pt-2 font-inter">
        <h3 className="text-xl font-semibold text-brand-black-secondary md:border-b border-grey-800 py-2 pl-6">
          {title}
        </h3>
        <form onSubmit={handleSubmit}>{children}</form>
        <div className="flex gap-2 justify-end mx-8 mt-3 items-center">
          <button
            onClick={handleConfirm}
            className="bg-brand-primary py-1 px-5 mb-6 rounded-lg md: hover:bg-brand-secondary"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 py-1 px-5 mb-6 rounded-lg text-white hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalsForm;
