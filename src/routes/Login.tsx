import React from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/Layout/AuthLayout";
import PageLayout from "../components/Layout/PageLayout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../components/Button/CustomButton";

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Bukan format email yang benar")
      .required("Email wajib diisi"),
    password: yup.string().required("Password wajib diisi"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="shadow-md bg-brand-black-secondary flex flex-col px-16 py-10 items-center">
        <h1 className="text-brand-primary text-4xl font-bold">
          Selamat Datang
        </h1>
        <h3 className="text-white text-md">Silahkan login untuk lanjut</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-white text-lg">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-none"
                placeholder="jeremisukaloli@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-white text-lg">
                Password*
              </label>
              <input
                type="password"
                id="email"
                className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-none w-96"
                placeholder="akusukakucing123"
                {...register("password")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-7 w-full items-end">
              <h3 className="text-white text-md">Lupa password?</h3>
            <CustomButton variant={"solid"} extraClass={"w-full mt-2"}>
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
