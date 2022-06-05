import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import adminBookApi from "../api/admin/adminBookApi";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import DetailList from "../components/Form/DetailList";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
import { useLocalStorage } from "../hooks/useLocalStorage";
import bookimage from "../static/bookimage.svg";
import bookimage2 from "../static/bookimage2.svg"
import { leftRows, rightRows } from "../data/bookDetailsData";
import { formBookUpdate } from "../data/formUpdateBook";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modals/Modal";
import ModalsForm from "../components/Modals/ModalsForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormLooper from "../components/Form/FormLooper";

const BookDetails = () => {

  const columns = [
    "Nomor Buku",
    "Nama",
    "Email",
    "Phone",
    "Status Peminjaman",
    "Tgl Expired",
  ];

  const data = [
    [
      "20004",
      "Sagung Githa Abednigo",
      "gedesudimahendra@gmail.com",
      "081212121212",
      "Dipinjam",
      "2020-01-01",
    ],
    [
      "20004",
      "Sagung Githa Abednigo",
      "gedesudimahendra@gmail.com",
      "081212121212",
      "Dipinjam",
      "2020-01-01",
    ],
    [
      "20004",
      "Sagung Githa Abednigo",
      "gedesudimahendra@gmail.com",
      "081212121212",
      "Dipinjam",
      "2020-01-01",
    ],
  ];

  const handleConfirm = () => {
    console.log("Confirm");
    setModal(false);
  };

  const pushData = (data: any) => {
    console.log("Push Data");
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const [modal, setModal, handleClose, handleOpen] = useModal();
  const [confirmModal, setconfirmModal, handleconfirmClose, handleconfirmOpen] =
    useModal();

  const [bookData, setBookData] = useState({})
  const [user, setUser, removeUser] = useLocalStorage("user", null);

  const { id } = useParams()
  
  const fetchData = async () => {
    const response = await adminBookApi.getDetailBook(user!, id!);
    console.log(response)
    setBookData(response.data)
  }

  useEffect(() => {
    if(user && id){
      fetchData()
    }
  }, [user, id])

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-Inter font-bold text-white">
          Book's Details
        </h1>
        <div className="flex w-1/3 items-center gap-5 justify-end">
          <Link to="/stock">
            <CustomButton variant="solid">Cek Stok</CustomButton>
          </Link>
          <CustomButton variant="solid" onClick={handleOpen}>
            <div className="flex items-center gap-2">
              <EditOutlined style={{ fontSize: "20px" }} />
              Ubah Data
            </div>
          </CustomButton>
        </div>
      </div>
      <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
        <div className="py-5 px-8 bg-brand-primary w-full inset-0 rounded-t-xl h-max">
          <h3 className="text-2xl font-Inter font-bold text-brand-black-primary">
            Sebuah seni untuk bersikap bodo amat
          </h3>
        </div>
        <div className="py-5 px-8">
          <div className="flex gap-8">
            <img src={bookimage2} alt="Book Image" className="w-64 h-48 rounded-md" />
            <div className="flex w-full flex-col">
              <h3 className="text-white font-bold text-2xl underline underline-offset-8 decoration-brand-primary">
                Informasi Buku :</h3>
              {/* <div className="flex justify-start gap-x-24 w-full mt-4"> */}
                <DetailList field={leftRows} data={""}/>
                <DetailList field={rightRows} data={""}/>
              {/* </div> */}
            </div>
          </div>
          <h3 className="text-white font-bold text-2xl mt-10 underline underline-offset-8 decoration-brand-primary">
            Riwayat Peminjaman </h3>
          <Table
            data={data}
            columns={columns}
            extraClassTable="w-full even:bg-brand-black-secondary"
            extraClassContainer="w-full bg-brand-black-alt mt-5"
          />
        </div>
      </Box>
      <Modal show={modal} onClose={handleClose}>
        <ModalsForm
          title={"Update Book Details"}
          handleCancel={handleClose}
          handleConfirm={handleClose}
          handleSubmit={handleSubmit(pushData)}
        >
          <div className="flex gap-5">
            <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formBookUpdate.left}
              register={register}
              errors={errors}
            />
             <FormLooper
              extraClass="flex flex-col gap-5"
              formdata={formBookUpdate.right}
              register={register}
              errors={errors}
            />
          </div>
        </ModalsForm>
      </Modal>
    </PageLayout>
  );
};

export default BookDetails;