import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/Layout/AuthLayout";
import elips from "../static/elips.svg";
import minerva from "../static/MinervaLogo.svg";
import * as yup from "yup";
import CustomButton from "../components/Button/CustomButton";
import { Link } from "react-router-dom";

const Forget = () => {
  const schema = yup.object({
    username: yup.string().required("Username wajib diisi"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <AuthLayout>
      <div className="absolute bottom-0 z-0 w-screen h-screens flex justify-between items-end">
        <img src={elips} alt="Circle Image" />
        <img src={minerva} alt="Circle Image" className="w-96" />
      </div>
      <div className="shadow-md bg-brand-black-secondary flex flex-col px-16 py-10 items-center z-10 rounded-md">
        <h1 className="text-brand-primary text-4xl font-bold">Lupa Password</h1>
        <h3 className="text-white text-md">
          Silahkan masukkan email untuk kode verifikasi
        </h3>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="username" className="text-white text-lg">
              Username*
            </label>
            <input
              id="username"
              className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-none"
              placeholder="adminganteng"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col mt-7 w-full items-end">
            <Link to="/">
              <h3 className="text-white text-md cursor-pointer">
                Login?
              </h3>
            </Link>
            <CustomButton variant={"solid"} extraClass={"w-full mt-2"}>
              Submit
            </CustomButton>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Forget;
