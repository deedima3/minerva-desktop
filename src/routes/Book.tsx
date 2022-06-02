import { EditOutlined, FundViewOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import Modal from "../components/Modals/Modal";
import Table from "../components/Table/Table";
import { columns, data } from "../data/bookData";
import ConfirmCard from "../components/Card/ConfirmCard";
import { useModal } from "../hooks/useModal";
import { save } from "@tauri-apps/api/dialog";
import ModalsForm from "../components/Modals/ModalsForm";
import * as yup from "yup";
import { useToast } from "../hooks/useToast";
import { useLoader } from "../hooks/useLoader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formfieldBookData } from "../data/formfieldBookData";
import FormLooper from "../components/Form/FormLooper";
import { useQuery } from 'react-query'
import adminBookApi from "../api/admin/adminBookApi";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Book = () => {
  const handleConfirm = () => {
    console.log("Confirm");
    setModal(false);
  };

  const pushData = (data: any) => {
    console.log("Push Data");
    console.log(data);
  };

  const schema = yup.object({
    image: yup.string().optional(),
    title: yup.string().required("Judul wajib diisi"),
    judulSeri: yup.string().required("Judul seri wajib diisi"),
    penerbit: yup.string().required("Penerbit wajib diisi"),
    deskripsi: yup.string().required("Deskripsi wajib diisi"),
    idJenis: yup.number().positive().required("Jenis wajib diisi"),
    bahasa: yup.string().required("Bahasa wajib diisi"),
    ISBN: yup.string().required("ISBN wajib diisi"),
    edisi: yup.string().required("Edisi wajib diisi"),
    subjek: yup.string().required("Subjek wajib diisi"),
    idKategori: yup.number().positive().required("Kategori wajib diisi"),
  });

  const [toast, showToast] = useToast(5000);

  const [modal, setModal, handleClose, handleOpen] = useModal();
  const [confirmModal, setconfirmModal, handleconfirmClose, handleconfirmOpen] =
    useModal();

  const [ data, setData ] = useState([]);

  const [user, setUser, removeUser] = useLocalStorage("user", null);

  const fetchData = async () => {
    let data = await adminBookApi.getAllBooks(user!);
    console.log(data)
    let returnData = data.map((item: any) => {
      let arrayReturn = []
      arrayReturn.push(item.JudulSeri)
      arrayReturn.push(item.Penerbit)
      arrayReturn.push(item.Deskripsi)
      arrayReturn.push(item.Bahasa)
      arrayReturn.push(item.ISBN)
      arrayReturn.push(item.Ketersediaan.toString())
      arrayReturn.push(item.Stock)
      return arrayReturn
    })
    setData(returnData);
  }

  useEffect(() => {
    if (user) {
      fetchData();
    }
  } , [user])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const exportData = async () => {
    console.log("Export Data");
    let dataPath = await save();
    console.log(dataPath);
  };

  const printData = async () => {
    console.log("Print Data");
    let dataPath = await save();
    console.log(dataPath);
  };

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Book List
          </h1>
        </div>
        <div className="flex w-1/2 gap-5 justify-end">
          <CustomButton variant="outline" onClick={exportData}>
            Export
          </CustomButton>
          <CustomButton variant="outline" onClick={printData}>
            Print
          </CustomButton>
          <CustomButton variant="solid" onClick={handleOpen}>
            <div className="flex items-center gap-2">
              <EditOutlined style={{ fontSize: "20px" }} />
              Add Data
            </div>
          </CustomButton>
        </div>
      </div>
      <SearchBar />
      <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
        <Table
          data={data!}
          columns={columns}
          extraClassTable="w-full even:bg-brand-black-alt"
          extraClassContainer="w-full mt-5 bg-brand-black-secondary"
          button={
            <div className="flex justify-center">
              <div className="flex flex-col gap-2 w-24 items-center">
                <SmallButton
                  variant="solid"
                  extraClass={"text-brand-black-primary w-20"}
                  onClick={handleconfirmOpen}
                >
                  Delete
                </SmallButton>
              </div>
            </div>
          }
        />
      </Box>
      <Modal show={modal} onClose={handleClose}>
        <ModalsForm
          title={"Add New Books"}
          handleCancel={handleClose}
          handleConfirm={handleClose}
          handleSubmit={handleSubmit(pushData)}
        >
          <div className="flex gap-5">
            <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formfieldBookData.left}
              register={register}
              errors={errors}
            />
            <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formfieldBookData.right}
              register={register}
              errors={errors}
            />
          </div>
        </ModalsForm>
      </Modal>
      <Modal show={confirmModal} onClose={handleconfirmClose}>
        <ConfirmCard
          thing={""}
          word={""}
          handleCancel={handleconfirmClose}
          handleConfirm={handleconfirmClose}
        />
      </Modal>
    </PageLayout>
  );
};

export default Book;
