import React from "react";
import FormSelect from "./FormSelect";
import FormTextField from "./FormTextField";
import FormTextInput from "./FormTextInput";

interface FormLooper {
  formdata: any;
  register: any;
  errors: any;
  extraClass: string;
}

const FormLooper = ({formdata, register, errors, extraClass} : FormLooper) => {
  return (
    <div className={extraClass}>
      {formdata.map(
        ({ title, placeholder, fieldname, type, option } : any) => {
          switch (type) {
            case "text":
              return (
                <FormTextInput
                  title={title}
                  placeholder={placeholder!}
                  fieldname={fieldname}
                  register={register}
                  errors={errors}
                />
              );
            case "select":
              return (
                <FormSelect
                  title={title}
                  fieldname={fieldname}
                  register={register}
                  errors={errors}
                  options={option!}
                />
              );
            case "textarea":
              return (
                <FormTextField
                  title={title}
                  fieldname={fieldname}
                  register={register}
                  errors={errors}
                  placeholder={placeholder!}
                />
              );
            default:
              return "";
          }
        }
      )}
    </div>
  );
};

export default FormLooper;
