import React from "react";

interface FormTextField {
  title: string;
  register: any;
  errors: any;
  placeholder: string;
  fieldname: string;
}

const FormTextField = ({
  title,
  register,
  errors,
  placeholder,
  fieldname,
}: FormTextField) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="username" className="text-brand-black-secondary text-lg">
        {title}
      </label>
      <textarea
        className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-brand-black-secondary border-2"
        name={fieldname}
        id={fieldname}
        cols={5}
        rows={10}
        {...register(fieldname)}
      >
        {placeholder}
      </textarea>
      {errors.username && (
        <p className="text-red-500 text-xs">{errors.username.message}</p>
      )}
    </div>
  );
};

export default FormTextField;
