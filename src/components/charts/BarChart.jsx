import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarLineChart = ({
  data,
  barKeys = [],
  lineKey = null,
  yAxisLeftLabel = "US$ Billion",
  yAxisRightLabel = "Share (%)",
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="year" />

      {/* Left Y-Axis */}
      <YAxis
        yAxisId="left"
        label={{ value: yAxisLeftLabel, angle: -90, position: "insideLeft" }}
      />

      {/* Right Y-Axis */}
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={[0, "auto"]}
        label={{ value: yAxisRightLabel, angle: -90, position: "insideRight" }}
      />

      <Tooltip />
      <Legend verticalAlign="bottom" />

      {/* Bars */}
      {barKeys.map((bar) => (
        <Bar
          key={bar.dataKey}
          yAxisId="left"
          dataKey={bar.dataKey}
          fill={bar.fill}
          name={bar.name}
        />
      ))}

      {/* Line */}
      {lineKey && (
        <Line
          yAxisId="right"
          type="monotone"
          dataKey={lineKey.dataKey}
          stroke={lineKey.stroke}
          name={lineKey.name}
          strokeWidth={2}
          dot={true}
        />
      )}
    </ComposedChart>
  </ResponsiveContainer>
);

export default BarLineChart;
