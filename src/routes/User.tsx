import { EditOutlined, FundViewOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import CustomButton from "../components/Button/CustomButton";
import SmallButton from "../components/Button/SmallButton";
import PageLayout from "../components/Layout/PageLayout";
import Table from "../components/Table/Table";

const User = () => {
  const columns = [
    'id', 'Nama', 'Institusi', 'Gender', 'Email', 'Phone'
  ];
  
  const data = [
    [
      '123',
      'Wayan Sudi Dima',
      'Universita Udayana',
      'L',
      'wynsudima@gmail.com',
      '08123456789'
    ],
    [
      '127',
      'Jeremi Herodian A.',
      'Universita Udayana',
      'L',
      'jerjerjeremi@gmail.com',
      '087348497086'
    ],
    [
      '129',
      'Sagung Putri',
      'Universitas Udayana',
      'P',
      'emailnyagp@gmail.com',
      '082146239521'
    ],
    [
      '132',
      'Bianca Githa',
      'Universita Udayana',
      'P',
      'biancagsp@gmail.com',
      '0987654321345'
    ],
    [
      '123',
      'Wayan Sudi Dima',
      'Universita Udayana',
      'L',
      'wynsudima@gmail.com',
      '08123456789'
    ]
  ];

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Reader List
          </h1>
        </div>
        <div className="flex w-1/2 gap-5 justify-end">
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
            <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-24 items-center">
              <SmallButton
                variant="solid"
                extraClass={"text-brand-black-primary w-20"}
              >
                Delete
              </SmallButton>
              <Link to="/user/1">
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
    </PageLayout>
  );
};

export default User;
