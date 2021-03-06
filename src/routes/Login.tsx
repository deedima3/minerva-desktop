import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/Layout/AuthLayout";
import PageLayout from "../components/Layout/PageLayout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../components/Button/CustomButton";
import elips from "../static/elips.svg";
import minerva from "../static/MinervaLogo.svg";
import { Link } from "react-router-dom";
import { AdminAuthApi } from "../api/auth/adminAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useToast } from "../hooks/useToast";
import { StopOutlined } from "@ant-design/icons";
import Toast from "../components/Toast/Toast";
import SmallButton from "../components/Button/SmallButton";
import { ToastProps } from "../interfaces/toast.interface";
import { useLoader } from "../hooks/useLoader";
import Loader from "../components/Loader/Loader";

const Login = () => {
  const schema = yup.object({
    username: yup.string().required("Username wajib diisi"),
    password: yup.string().required("Password wajib diisi"),
  });

  const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [toast, showToast] = useToast(5000);
  const [isLoading, handleStopLoading, handleStartLoading] = useLoader();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const toastContentSuccess : ToastProps = {
    title: "Login Berhasil",
    message: "Selamat datang di Minerva",
    variant : "success"
  }

  const toastContentFailed : ToastProps = {
    title: "Login Gagal",
    message: "Username atau password salah",
    variant : "error"
  }

  const onSubmit = async (data: any) => {
    console.log(data)
    handleStartLoading()
    let token = await AdminAuthApi.login(data);
    handleStopLoading()
    if (token) {
      console.log(token)
      showToast(2000, toastContentSuccess)
      setUser(token);
      location.reload()
    } else{
      showToast(2000, toastContentFailed)
    }
  };

  return (
    <AuthLayout>
      <div className="absolute bottom-0 z-0 w-screen h-screens flex justify-between items-end">
        <img src={elips} alt="Circle Image" />
        <img src={minerva} alt="Circle Image" className="w-96" />
      </div>
      <div className="shadow-md bg-brand-black-secondary flex flex-col px-16 py-10 items-center z-10 rounded-md">
        <h1 className="text-brand-primary text-4xl font-bold">
          Selamat Datang
        </h1>
        <h3 className="text-white text-md">Silahkan login untuk lanjut</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="username" className="text-white text-lg">
                Username*
              </label>
              <input
                id="username"
                className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-none"
                placeholder="jeremisukaloli@gmail.com"
                {...register("username")} />
              {errors.username && (
                <p className="text-red-500 text-xs">{errors.username.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-white text-lg">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="bg-white rounded-md px-5 py-2 text-brand-black-secondary border-none w-96"
                placeholder="akusukakucing123"
                {...register("password")} />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-7 w-full items-end">
            <Link to="/forget">
              <h3 className="text-white text-md cursor-pointer">
                Lupa password?
              </h3>
            </Link>
            <CustomButton variant={"solid"} extraClass={"w-full mt-2"}>
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
      <Toast show={toast.show} title={toast.title} message={toast.message} variant={toast.variant}/>
      <Loader isLoading={isLoading}/>
    </AuthLayout>
  );
};

export default Login;
