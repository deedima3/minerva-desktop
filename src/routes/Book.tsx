import { EditOutlined, FundViewOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";

const Book = () => {
  const columns = [
    "Title",
    "Penerbit",
    "Deskripsi",
    "Bahasa",
    "Edisi",
    "Ketersediaan",
    "Stok",
  ];

  const data = [
    [
      "Tailwind on Fire",
      "Gramedia",
      "Aku suka Tailwind on Fire",
      "Indonesia",
      "1",
      "Ada",
      "150",
    ],
    [
      "Tailwind on Fire",
      "Gramedia",
      "Aku suka Tailwind on Fire",
      "Indonesia",
      "1",
      "Ada",
      "150",
    ],
    [
      "Tailwind on Fire",
      "Gramedia",
      "Aku suka Tailwind on Fire",
      "Indonesia",
      "1",
      "Ada",
      "150",
    ],
    [
      "Tailwind on Fire",
      "Gramedia",
      "Aku suka Tailwind on Fire",
      "Indonesia",
      "1",
      "Ada",
      "150",
    ],

    [
      "Tailwind on Fire",
      "Gramedia",
      "Aku suka Tailwind on Fire",
      "Indonesia",
      "1",
      "Ada",
      "150",
    ],
  ];

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Book's Details
          </h1>
        </div>
        <div className="flex w-1/2 justify-between">
          <CustomButton variant="outline">Export</CustomButton>
          <CustomButton variant="outline">Print</CustomButton>
          <CustomButton variant="solid">
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
          extraClassTable="w-full even:bg-brand-black-primary"
          extraClassContainer="w-full mt-10"
          button={
            <div className="flex flex-col gap-2 w-24 justify-center items-center">
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
          }
        />
      </Box>
    </PageLayout>
  );
};

export default Book;
