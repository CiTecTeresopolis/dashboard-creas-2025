import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { escolaridadeData, CHART_COLORS } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const EscolaridadeChart = () => {
  return (
    <ChartSection title="Escolaridade" description="Nível de escolaridade dos atendidos">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={escolaridadeData} layout="vertical" margin={{ left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }}
            formatter={(value: number) => [value.toLocaleString("pt-BR"), "Atendimentos"]}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} fill={CHART_COLORS[1]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default EscolaridadeChart;
