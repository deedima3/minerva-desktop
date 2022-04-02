import { FileAddOutlined, FundViewOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import Table from "../components/Table/Table";
import { columns, data } from "../data/stockData";

const BookStock = () => {

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
          <CustomButton variant="solid">
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
                    >
                    Edit
                   </SmallButton>
                </div>
            </div>
          }
        />
      </Box>
    </PageLayout>
  );
};

export default BookStock;