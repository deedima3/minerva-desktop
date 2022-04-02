import {
  LogoutOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import CustomButton from "../components/Button/CustomButton";
import PageLayout from "../components/Layout/PageLayout";
import { useLocalStorage } from "../hooks/useLocalStorage";
import minervaLogo from "../static/MinervaPng.png";

const Admin = () => {

  const [user, setUser, removeUser] = useLocalStorage("user", null);

  const logout = () => {
      setUser(null);
      location.replace("/");
  }
  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center">
        <img src={minervaLogo} alt="Minerva Logo" className="w-60 mt-5" />
        <h1 className="text-4xl text-brand-primary font-bold">
          Minerva Desktop App
        </h1>
        <h1 className="text-lg text-brand-primary font-light">
          Version v.0.0.1
        </h1>
        <div className="w-full max-w-lg flex flex-col mt-10 gap-5">
          <CustomButton variant={"solid"} extraClass="w-full">
            <div className="flex w-full item-center justify-center gap-5">
              <ProfileOutlined className="text-xl flex items-center" />
              <p className="text-xl">Profile</p>
            </div>
          </CustomButton>
          <CustomButton variant={"solid"} extraClass="w-full">
            <div className="flex w-full item-center justify-center gap-5">
              <SettingOutlined className="text-xl flex items-center" />
              <p className="text-xl">Setting</p>
            </div>
          </CustomButton>
          <CustomButton variant={"solid"} extraClass="w-full">
            <div className="flex w-full item-center justify-center gap-5">
              <QuestionCircleOutlined className="text-xl flex items-center" />
              <p className="text-xl">Help</p>
            </div>
          </CustomButton>
          <CustomButton variant={"solid"} extraClass="w-full" onClick={logout}>
            <div className="flex w-full item-center justify-center gap-5">
              <LogoutOutlined className="text-xl flex items-center" />
              <p className="text-xl">Logout</p>
            </div>
          </CustomButton>
        </div>
      </div>
    </PageLayout>
  );
};

export default Admin;
