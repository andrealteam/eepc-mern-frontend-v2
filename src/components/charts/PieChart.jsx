import React, { useEffect, useState } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DEFAULT_COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#d84a4a",
  "#aa6c39",
  "#5B9BD5",
];

const PieChart = ({
  data = [],
  colors = DEFAULT_COLORS,
  outerRadius = 150,
  height = 500,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      style={{
        height: `${height}px`,
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <ResponsiveContainer width="100%" height="90%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="id"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            startAngle={90}
            endAngle={-270}
            paddingAngle={0.5}
            label={({ value, name }) =>
              isMobile ? `${value}%` : `${name}: ${value}%`
            }
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`slice-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
              const total = data.reduce((sum, entry) => sum + entry.value, 0);
              const percent = ((value / total) * 100).toFixed(0);
              return [`${percent}%`, name];
            }}
          />
          <Legend verticalAlign="bottom" layout="horizontal" />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
