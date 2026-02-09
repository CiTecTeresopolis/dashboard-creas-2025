import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { situacoesData } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const SituacoesChart = () => {
  return (
    <ChartSection title="Situações de Vulnerabilidade" description="Principais situações registradas">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={situacoesData}
            cx="50%"
            cy="45%"
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {situacoesData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }}
            formatter={(value: number, name: string) => [value.toLocaleString("pt-BR"), name]}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={9}
            formatter={(value) => <span className="text-xs text-foreground ml-1">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default SituacoesChart;
