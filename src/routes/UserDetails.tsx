import { EditOutlined } from "@ant-design/icons";
import React from "react";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
import userprofile from "../static/userprofile.svg";

const UserDetails = () => {
 const columns = [
  'id', 'Judul Buku', 'Penerbit', 'Status Peminjaman', 'Tgl Expired'
];

const data = [
  [
    '123',
    'Harry Potter and The Hogwarts Collection',
    'Gramedia Pustaka Utama',
    'Sudah dikembalikan',
    '2022-03-28',
  ],
  [
    '127',
    'Think and Grow Rich',
    'Gramedia Pustaka Utama',
    'Sedang Dipinjam',
    '2022-03-28',
  ],
  [
    '132',
    'Harry Potter Aja',
    'Gramedia Pustaka Utama',
    'Sedang Dipinjam',
    '2022-03-28',
  ],
];

return (
  <PageLayout>
    <div className="flex w-full justify-between">
      <h1 className="text-4xl font-Inter font-bold text-white">
        Reader's Details
      </h1>
      <div className="flex w-1/3 items-center gap-5 justify-end">
        <CustomButton variant="outline">Export</CustomButton>
        <CustomButton variant="outline">Edit User</CustomButton>
        <CustomButton variant="solid">
          <div className="flex items-center gap-2">
            <EditOutlined style={{ fontSize: "20px" }} />
            Ubah Data
          </div>
        </CustomButton>
      </div>
    </div>
    <Box variant="secondary" extraClass={"w-full rounded-xl mt-5 relative"}>
      <div className="py-5 px-8">
        <div className="flex gap-8">
          <img src={userprofile} alt="Book Image" className="rounded-md" />
          <div className="flex w-full flex-col">
            <h3 className="text-white font-bold text-2xl underline underline-offset-8 decoration-brand-primary">
              Sagung Putri</h3>
            <div className="flex justify-start gap-x-24 w-full mt-4">
              <div className="text-white font-light text-s ">
                <p>id : 129</p>
                <p>Institusi : Universitas Udayana</p>
                <p>Gender : P</p>
                <p>Email : emailnyagp@gmail.com</p>
                <p>Phone : 082146239521</p>
                <p>Alamat : Br. Panca Jaya, Mengwitani, Mengwi</p>
                <p>Kode Post : 80351</p>
              </div>
              <div className="text-white font-light text-s ">
                <p>Tgl Lahir : 2002-02-21</p>
                <p>Tgl Registrasi : 2022-12-21</p>
                <p>Tgl Expired : 2022-12-27</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-white font-bold text-2xl mt-10 underline underline-offset-8 decoration-brand-primary">
          Riwayat Peminjaman :</h3>
        <Table
          data={data}
          columns={columns}
          extraClassTable="w-full even:bg-brand-black-secondary"
          extraClassContainer="w-full bg-brand-black-alt mt-5"
        />
      </div>
    </Box>
  </PageLayout>
);
}

export default UserDetails