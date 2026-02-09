import { servicosData, CHART_COLORS } from "@/data/creas-data";
import ChartSection from "./ChartSection";

const ServicosChart = () => {
  const total = servicosData.reduce((acc, s) => acc + s.value, 0);

  return (
    <ChartSection title="Serviços Prestados" description="Volume por tipo de serviço">
      <div className="space-y-3">
        {servicosData.map((servico, index) => {
          const pct = ((servico.value / total) * 100).toFixed(1);
          return (
            <div key={servico.name}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-foreground font-medium leading-tight max-w-[70%]">{servico.name}</span>
                <span className="text-xs font-mono font-semibold text-foreground">{servico.value}</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: CHART_COLORS[index] }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartSection>
  );
};

export default ServicosChart;
