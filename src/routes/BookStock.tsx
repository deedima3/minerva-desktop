import { FileAddOutlined, FundViewOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import FormLooper from "../components/Form/FormLooper";
import PageLayout from "../components/Layout/PageLayout";
import Modal from "../components/Modals/Modal";
import ModalsForm from "../components/Modals/ModalsForm";
import SearchBar from "../components/SearchBar/SearchBar";
import Table from "../components/Table/Table";
import { formStockData } from "../data/formStockData";
import { columns, data } from "../data/stockData";
import { useModal } from "../hooks/useModal";

const BookStock = () => {

  const [modal, setModal, handleClose, handleOpen] = useModal();
  const [confirmModal, setconfirmModal, handleconfirmClose, handleconfirmOpen] =
    useModal();

  const schema = yup.object({
    noBuku: yup.string().required("Nomor buku wajib diisi"),
    namaRak: yup.string().required("Nama Rak wajib diisi"),
    noRak: yup.string().required("Nomor Rak wajib diisi"),
    Ketersediaan: yup.string().required("Ketersediaan wajib diisi"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const pushData = (data: any) => {
    console.log("Push Data");
    console.log(data);
  };
    
  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Book Stock
          </h1>
        </div>
        <div className="flex w-1/2 gap-5 justify-end">
          <CustomButton variant="outline">Export</CustomButton>
          <CustomButton variant="outline">Print</CustomButton>
          <CustomButton variant="solid" onClick={handleOpen}>
            <div className="flex items-center gap-2">
              <FileAddOutlined style={{ fontSize: "20px" }} />
              Tambah Stock
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
                    Edit
                   </SmallButton>
                </div>
            </div>
          }
        />
      </Box>
      <Modal show={modal} onClose={handleClose}>
        <ModalsForm
          title={"Tambah Stock Buku"}
          handleCancel={handleClose}
          handleConfirm={handleClose}
          handleSubmit={handleSubmit(pushData)}
        >
          <div className="flex gap-5">
            <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formStockData.add}
              register={register}
              errors={errors}
            />
          </div>
        </ModalsForm>
      </Modal>
      <Modal show={modal} onClose={handleClose}>
        <ModalsForm
          title={"Edit Stock"}
          handleCancel={handleClose}
          handleConfirm={handleClose}
          handleSubmit={handleSubmit(pushData)}
        >
          <div className="flex gap-5">
            <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formStockData.update}
              register={register}
              errors={errors}
            />
          </div>
        </ModalsForm>
      </Modal>
    </PageLayout>
  );
};

export default BookStock;
