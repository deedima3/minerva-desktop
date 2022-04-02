import { FileAddOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
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

const BorrowedBook = () => {

  const handleConfirm = () => {
    console.log("Confirm")
    setModal(false)
  }

  const [modal, setModal, handleClose, handleOpen] = useModal();
    

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-Inter font-bold text-white">
          Borrowed Book
        </h1>
        <div className="flex w-1/2 gap-5 justify-end">
          <CustomButton variant="outline">Export</CustomButton>
          <CustomButton variant="outline">Print</CustomButton>
          <CustomButton variant="solid">
            <div className="flex items-center gap-2">
              <FileAddOutlined style={{ fontSize: "20px" }} />
              Pinjam Buku Baru
            </div>
          </CustomButton>
        </div>
      </div>
      <SearchBar/>
      <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
        <Table
          data={data}
          columns={columns}
          extraClassTable="w-full even:bg-brand-black-alt"
          extraClassContainer="w-full mt-5 bg-brand-black-secondary"
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
                </div>
            </div>
          }
        />
      </Box>
      <Modal show={modal} onClose={handleClose} >
        <ConfirmCard handleCancel={handleClose} handleConfirm={handleConfirm} thing="data" word="borrowed data"/>
      </Modal>
    </PageLayout>
  );
};

export default BorrowedBook;
