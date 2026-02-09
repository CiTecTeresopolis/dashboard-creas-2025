import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { bairrosViolencia } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const BairrosChart = () => {
  return (
    <ChartSection title="Bairros — Violência Intrafamiliar" description="Top 5 bairros com maior incidência">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={bairrosViolencia} layout="vertical" margin={{ left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }}
            formatter={(value: number) => [value.toLocaleString("pt-BR"), "Casos"]}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} fill="hsl(var(--chart-4))" barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default BairrosChart;
