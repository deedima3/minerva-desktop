<<<<<<< Updated upstream
import React from 'react'
=======
import { EditOutlined } from "@ant-design/icons";
import React from "react";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";
>>>>>>> Stashed changes

const Book = () => {

  const columns = ["Nomor Buku", "Nama", "Email", "Phone", "Status Peminjaman", "Tgl Expired"];
  const data = ['']

  return (
<<<<<<< Updated upstream
    <div>Book</div>
  )
}
=======
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
          <Table/>
        </div>
      </Box>
    </PageLayout>
  );
};
>>>>>>> Stashed changes

export default Book;
