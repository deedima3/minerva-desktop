import { EditOutlined } from "@ant-design/icons";
import React from "react";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
import bookimage from "../static/bookimage.svg";

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

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-Inter font-bold text-white">
          Book's Details
        </h1>
        <div className="flex w-1/3 justify-between items-center">
          <CustomButton variant="solid">Cek Stok</CustomButton>
          <CustomButton variant="solid">
            <div className="flex items-center gap-2">
              <EditOutlined style={{ fontSize: "20px" }} />
              Ubah Data
            </div>
          </CustomButton>
        </div>
      </div>
      <Box extraClass={"w-full rounded-xl mt-5 relative"}>
        <div className="py-5 px-8 bg-brand-primary w-full inset-0 rounded-t-xl h-max">
          <h3 className="text-2xl font-Inter font-bold text-brand-black-primary">
            Sebuah seni untuk bersikap bodo amat
          </h3>
        </div>
        <div className="py-5 px-8">
          <div className="flex gap-5">
            <img src={bookimage} alt="Book Image" className="rounded-md" />
            <div className="flex w-full flex-col">
              <h3 className="text-white font-bold text-2xl">Informasi Buku:</h3>
              <div className="flex justify-between w-ful mt-2">
                <div className="text-white font-light text-s ">
                  <p>ID Buku : BK120</p>
                  <p>Nomor Seri : 01</p>
                  <p>Judul Seri : Lorem Ipsum</p>
                  <p>Penerbit : Gramedia Pustaka</p>
                  <p>Tipe Buku : Karya Ilmiah</p>
                </div>
                <div className="text-white font-light text-s ">
                  <p>Bahasa : Latin</p>
                  <p>ISBN : - </p>
                  <p>Edisi : 5</p>
                </div>
                <div className="text-white font-light text-s ">
                  <p>Ketersediaan : Ada</p>
                  <p>Total Stok : 2</p>
                  <p>Nama Rak : Teknologi</p>
                  <p>Nomor Rak : T2</p>
                </div>
              </div>
            </div>
          </div>
          <Table
            data={data}
            columns={columns}
            extraClassTable="w-full"
            extraClassContainer="w-full mt-10"
          />
        </div>
      </Box>
    </PageLayout>
  );
};

export default BookDetails;
