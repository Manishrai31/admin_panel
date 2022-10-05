import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "March",
      Withdrawl: "2002",
      Credit : "1234"
    },
    {
      name: "April",
      Withdrawl: "1006",
      Credit : "4353"

    },
    {
      name: "May",
      Withdrawl: "0987",
      Credit : "2353"

    },
    {
      name: "July",
      Withdrawl: "0683",
      Credit : "1234"

    },
    {
      name: "August",
      Withdrawl: "3456",
      Credit : "1000"

    },
    {
      name: "September",
      Withdrawl: "1982",
      Credit : "6532"

    },
  ];
  return (
    <div className="chart">
      <div className="title">Last 6 Months Revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Withdrawl"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="Credit"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
