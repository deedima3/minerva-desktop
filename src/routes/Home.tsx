import React from "react";
import { Link } from "react-router-dom";
import StatsCard from "../components/Card/StatsCard";
import UserReturnCard from "../components/Card/UserReturnCard";
import PageLayout from "../components/Layout/PageLayout";
import Sidebar from "../components/Navbar/Sidebar";
import { LineChart, Line, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "../data/linedummy";
import { StopOutlined } from "@ant-design/icons";
import Toast from "../components/Toast/Toast";

const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-row justify-between w-full gap-10">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-Inter font-bold text-white">
            Statistik Harian
          </h1>
          <div className="flex flex-row mt-5 w-full justify-between gap-5">
            <StatsCard title="Dipinjam" amount={5000} thing="Buku" />
            <StatsCard title="Dikembalikan" amount={200} thing="Buku" />
            <StatsCard title="Dibooking" amount={500} thing="Buku" />
          </div>
          <div className="bg-brand-black-secondary mt-5 rounded-md py-10 px-5 flex items-center justify-center">
            <LineChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
        <div className="flex flex-col gap-5 min-w-max h-full max-h-full">
          <UserReturnCard />
          <UserReturnCard />
          <UserReturnCard />
          <UserReturnCard />
          <UserReturnCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
