import { useMemo } from "react";
import { PlugCategory } from "@/data/plugsData";

export const usePlugsFilter = (plugsData: PlugCategory[], searchTerm: string) => {
  return useMemo(() => {
    return plugsData
      .map(category => ({
        ...category,
        items: category.items.filter(plug => {
          const q = searchTerm.toLowerCase();
          const diametroString = plug.Diametro_recomendado_del_cilindro !== undefined 
            ? plug.Diametro_recomendado_del_cilindro.toString() 
            : "";

          return (
            plug.NumeroParte?.toLowerCase?.().includes(q) ||
            plug.Tamaño_de_Sello?.toLowerCase?.().includes(q) ||
            diametroString.includes(q) ||
            category.categoria.toLowerCase().includes(q) ||
            plug.tipo?.toLowerCase?.().includes(q) ||
            plug.material?.toLowerCase?.().includes(q) ||
            plug.aplicacion?.toLowerCase?.().includes(q)
          );
        })
      }))
      .filter(category => category.items.length > 0);
  }, [plugsData, searchTerm]);
};
