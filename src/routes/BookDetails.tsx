import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import adminBookApi from "../api/admin/adminBookApi";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { BookDetail } from "../interfaces/book.interface";
import bookimage from "../static/bookimage.svg";
import bookimage2 from "../static/bookimage2.svg"

const BookDetails = () => {

  const columns = [
    "Nomor Buku",
    "Nama",
    "Email",
    "Phone",
    "Status Peminjaman",
    "Tgl Expired",
  ];

  const [bookData, setBookData] = useState<BookDetail | null>(null)
  const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [borrowedData, setBorrowedData] = useState<any>(null);

  const { id } = useParams()
  
  const fetchData = async () => {
    const response = await adminBookApi.getDetailBook(id!, user!);
    const history = await adminBookApi.getHistoryBookedBook(id!, user!);
    let arrayReturn = history.map((item: any) => {
      let arrayTemp = []
      arrayTemp.push(item.ID)
      arrayTemp.push(item.Member.Nama)
      arrayTemp.push(item.Member.Email)
      arrayTemp.push(item.Member.Phone)
      arrayTemp.push(item.Borrowed ? "Dipinjam" : "Dikembalikan")
      arrayTemp.push(item.ExpireBorrow)
      return arrayTemp
    })
    setBorrowedData(arrayReturn)
    setBookData(response)
    console.log(arrayReturn)
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
          <CustomButton variant="solid">
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
            {bookData && bookData!.JudulSeri}
          </h3>
        </div>
        <div className="py-5 px-8">
          <div className="flex gap-8">
            <img src={bookData ? bookData!.Image : ""} alt="Book Image" className="w-64 h-48 rounded-md" />
            <div className="flex w-full flex-col">
              <h3 className="text-white font-bold text-2xl underline underline-offset-8 decoration-brand-primary">
                Informasi Buku :</h3>
              <div className="flex justify-start gap-x-24 w-full mt-4">
                <div className="text-white font-light text-s ">
                  <p>ID Buku : {bookData && bookData!.ID}</p>
                  <p>Nomor Seri : {bookData && bookData!.ID}</p>
                  <p>Judul Seri : {bookData && bookData!.JudulSeri}</p>
                  <p>Penerbit : {bookData && bookData!.Penerbit}</p>
                  <p>Tipe Buku : {bookData && bookData!.JudulSeri}</p>
                  <p>Bahasa : {bookData && bookData!.Bahasa}</p>
                </div>
                <div className="text-white font-light text-s ">
                  <p>ISBN : {bookData && bookData!.ISBN}</p>
                  <p>Edisi : {bookData && bookData!.Edisi}</p>
                  <p>Ketersediaan : {bookData && bookData!.Ketersediaan}</p>
                  <p>Total Stok : {bookData && bookData!.Stock}</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-white font-bold text-2xl mt-10 underline underline-offset-8 decoration-brand-primary">
            Riwayat Peminjaman </h3>
          <Table
            data={borrowedData ? borrowedData : []}
            columns={columns}
            extraClassTable="w-full even:bg-brand-black-secondary"
            extraClassContainer="w-full bg-brand-black-alt mt-5"
          />
        </div>
      </Box>
    </PageLayout>
  );
};

export default BookDetails;