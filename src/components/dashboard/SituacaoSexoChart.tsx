import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { situacaoPorSexo } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const SituacaoSexoChart = () => {
  return (
    <ChartSection title="Situação por Sexo" description="Análise cruzada: situação × gênero">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={situacaoPorSexo} margin={{ left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="situacao" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} interval={0} angle={-15} textAnchor="end" height={60} />
          <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }} />
          <Legend
            iconType="circle"
            iconSize={9}
            formatter={(value) => <span className="text-xs text-foreground ml-1">{value}</span>}
          />
          <Bar dataKey="Masculino" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} barSize={28} />
          <Bar dataKey="Feminino" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} barSize={28} />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default SituacaoSexoChart;
