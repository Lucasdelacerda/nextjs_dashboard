// esse loading ele serve para mostrar algo enquanto um componente carrega na página, o DashboardSkeleton ele mostra o esqueleto da página sendo carregado para dar um visual melhor

import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton/>;
  }