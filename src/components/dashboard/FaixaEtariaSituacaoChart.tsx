import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { faixaEtariaPorSituacao, CHART_COLORS } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const FaixaEtariaSituacaoChart = () => {
  return (
    <ChartSection title="Faixa Etária por Situação" description="Distribuição etária para cada tipo de vulnerabilidade">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={faixaEtariaPorSituacao} margin={{ left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="situacao" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} interval={0} />
          <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip contentStyle={{ borderRadius: "0.5rem", border: "1px solid hsl(var(--border))", fontSize: 13 }} />
          <Legend
            iconType="circle"
            iconSize={9}
            formatter={(value) => <span className="text-xs text-foreground ml-1">{value}</span>}
          />
          <Bar dataKey="Criança (0-12)" fill={CHART_COLORS[2]} radius={[4, 4, 0, 0]} stackId="a" />
          <Bar dataKey="Adolescente (13-18)" fill={CHART_COLORS[3]} stackId="a" />
          <Bar dataKey="Adulto (19-59)" fill={CHART_COLORS[0]} stackId="a" />
          <Bar dataKey="Idoso (60+)" fill={CHART_COLORS[4]} radius={[4, 4, 0, 0]} stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
};

export default FaixaEtariaSituacaoChart;
