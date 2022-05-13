import React from "react";

export interface FormSelectField {
  title: string;
  register: any;
  errors: any;
  fieldname: string;
  options?: string[];
}

const FormSelect = ({
  title,
  register,
  errors,
  fieldname,
  options,
}: FormSelectField) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="username" className="text-brand-black-secondary text-lg">
        {title}
      </label>
      <select
        name={fieldname}
        id={fieldname}
        className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-brand-black-secondary border-2"
        {...register(fieldname)}
      >
        {options && options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {errors.username && (
        <p className="text-red-500 text-xs">{errors.username.message}</p>
      )}
    </div>
  );
};

export default FormSelect;
