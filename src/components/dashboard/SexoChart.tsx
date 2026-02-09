import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { sexoData } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const SexoChart = () => {
  return (
    <ChartSection title="Distribuição por Sexo" description="Total de atendimentos por gênero">
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={sexoData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={95}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >
            {sexoData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }}
            formatter={(value: number) => [value.toLocaleString("pt-BR"), ""]}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={10}
            formatter={(value) => <span className="text-xs text-foreground ml-1">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default SexoChart;
