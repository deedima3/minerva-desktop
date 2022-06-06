import { EditOutlined, UserAddOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
import SearchBar from "../components/SearchBar/SearchBar";
import { columns, data } from "../data/userData";
import { useModal } from "../hooks/useModal";
import ConfirmCard from "../components/Card/ConfirmCard";
import Modal from "../components/Modals/Modal";

const User = () => {
  const handleConfirm = () => {
    console.log("Confirm")
    setModal(false)
  }

  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    let data = await adminUserApi.getAllUsers();
    setUserData(data);
  }
  

  const [modal, setModal, handleClose, handleOpen] = useModal();

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Reader List
          </h1>
        </div>
        <div className="flex w-1/2 gap-5 justify-end">
          <CustomButton variant="outline">Export</CustomButton>
          <CustomButton variant="outline">Print</CustomButton>
          <CustomButton variant="solid">
            <div className="flex items-center gap-2">
              <UserAddOutlined style={{ fontSize: "20px" }} />
              Tambah Akun
            </div>
          </CustomButton>
        </div>
      </div>
      <SearchBar/>
      <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
        <Table
          data={data}
          columns={columns}
          extraClassTable="w-full even:bg-brand-black-primary"
          extraClassContainer="w-full mt-5"
          button={
            <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-24 items-center">
              <SmallButton
                variant="solid"
                extraClass={"text-brand-black-primary w-20"}
                onClick={handleOpen}
              >
                Delete
              </SmallButton>
              <Link to="/user/1">
                <SmallButton
                  variant="solid"
                  extraClass={"text-brand-black-primary"}
                >
                  Detail
                </SmallButton>
              </Link>
            </div>
            </div>
          }
        />
      </Box>
      <Modal show={modal} onClose={handleClose} >
        <ConfirmCard handleCancel={handleClose} handleConfirm={handleConfirm} thing="user" word="user profile"/>
      </Modal>
    </PageLayout>
  );
};

export default User;
