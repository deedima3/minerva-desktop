import { BookOutlined, CaretDownFilled, HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import logo from "../../static/MinervaLogo.svg";
import SidebarLink from "./SidebarLink";
import user from '../../static/userprofile.svg'
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="flex flex-col items-center bg-brand-black-secondary min-h-screen w-24 py-5 justify-between shadow-sidebar">
      <div className="flex flex-col items-center justify-center">
        <img className="w-11" src={logo} alt="Minerva Logo" />
      </div>
      <div className="flex flex-col items-center justify-evenly h-72">
        <SidebarLink routes="/" icon={<HomeOutlined style={{color : '#FBFBFB', fontSize: '24px'}} />} iconSelected={<HomeOutlined style={{color : '#58F9C8', fontSize: '24px'}}/>} /> 
        <SidebarLink routes="/book" icon={<BookOutlined style={{color : '#FBFBFB', fontSize: '24px'}}/>} iconSelected={<BookOutlined style={{color : '#58F9C8', fontSize: '24px'}}/>} />
        <SidebarLink routes="/user" icon={<UserOutlined style={{color : '#FBFBFB', fontSize: '24px'}}/>} iconSelected={<UserOutlined style={{color : '#58F9C8', fontSize: '24px'}}/>} /> 
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to={"/admin"}>
          <img src={user} alt="" className="rounded-full w-10"/>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
