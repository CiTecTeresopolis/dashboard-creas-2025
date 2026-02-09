import { Shield } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="dashboard-gradient rounded-2xl p-6 md:p-8 text-primary-foreground mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary-foreground/15">
          <Shield className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
            CREAS — Perfil de Atendimento 2025
          </h1>
          <p className="text-xs md:text-sm text-primary-foreground/70 mt-0.5">
            Centro de Referência Especializado de Assistência Social · Dashboard de Métricas
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
