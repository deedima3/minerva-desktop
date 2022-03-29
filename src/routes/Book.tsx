import { EditOutlined, FundViewOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import Modal from "../components/Modals/Modal";
import Table from "../components/Table/Table";
import { columns, data } from "../data/bookData";

const Book = () => {

  const [Open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Book List
          </h1>
        </div>
        <div className="flex w-1/2 gap-5 justify-end">
          <CustomButton variant="outline">Export</CustomButton>
          <CustomButton variant="outline">Print</CustomButton>
          <CustomButton variant="solid" onClick={handleOpen}>
            <div className="flex items-center gap-2">
              <EditOutlined style={{ fontSize: "20px" }} />
              Ubah Data
            </div>
          </CustomButton>
        </div>
      </div>
      <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
        <Table
          data={data}
          columns={columns}
          extraClassTable="w-full even:bg-brand-black-alt"
          extraClassContainer="w-full mt-10 bg-brand-black-secondar"
          button={
            <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-24 items-center">
              <SmallButton
                variant="solid"
                extraClass={"text-brand-black-primary w-20"}
              >
                Delete
              </SmallButton>
              <Link to="/book/1">
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
      <Modal show={Open} onClose={handleClose} >
        <p>
        This is modal
        </p>
      </Modal>
    </PageLayout>
  );
};

export default Book;
