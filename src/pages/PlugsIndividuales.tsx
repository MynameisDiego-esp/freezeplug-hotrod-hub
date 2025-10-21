import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Search, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface IndividualPlug {
  NumeroParte: string;
  Tamaño_de_Sello: string;
  tipo?: string;
  Diametro_recomendado_del_cilindro?: number;
  material?: string;
  aplicacion?: string;
}

interface PlugCategory {
  categoria: string;
  descripcion: string;
  items: IndividualPlug[];
}

const plugsData: PlugCategory[] = [
  {
    categoria: "Cup Type - Tapones de Copa",
    descripcion: "Tapones tipo copa para aplicaciones generales y universales. Ideales para reparaciones estándar.",
    items: [
      {
        NumeroParte: "199 S",
        Tamaño_de_Sello: "10.8 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.425
      },
      {
        NumeroParte: "200 S",
        Tamaño_de_Sello: "11 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.433
      },
      {
        NumeroParte: "202 S",
        Tamaño_de_Sello: "12 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.472
      },
      {
        NumeroParte: "204 S",
        Tamaño_de_Sello: "14 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.551
      },
      {
        NumeroParte: "205 S",
        Tamaño_de_Sello: "16 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.63
      },
      {
        NumeroParte: "203 S",
        Tamaño_de_Sello: "16.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.65
      },
      {
        NumeroParte: "206 S",
        Tamaño_de_Sello: "17 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.669
      },
      {
        NumeroParte: "208 S",
        Tamaño_de_Sello: "18 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.709
      },
      {
        NumeroParte: "209 S",
        Tamaño_de_Sello: "19 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.748
      },
      {
        NumeroParte: "210 S",
        Tamaño_de_Sello: "20 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.787
      },
      {
        NumeroParte: "212 S",
        Tamaño_de_Sello: "21 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.827
      },
      {
        NumeroParte: "214 S",
        Tamaño_de_Sello: "22 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.866
      },
      {
        NumeroParte: "215 S",
        Tamaño_de_Sello: "23 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.906
      },
      {
        NumeroParte: "216 S",
        Tamaño_de_Sello: "24 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.945
      },
      {
        NumeroParte: "218 S",
        Tamaño_de_Sello: "25 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.984
      },
      {
        NumeroParte: "220 S",
        Tamaño_de_Sello: "25.1 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 0.988
      },
      {
        NumeroParte: "223 S",
        Tamaño_de_Sello: "26 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.024
      },
      {
        NumeroParte: "201 S",
        Tamaño_de_Sello: "27 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.063
      },
      {
        NumeroParte: "224 S",
        Tamaño_de_Sello: "28 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.102
      },
      {
        NumeroParte: "226 S",
        Tamaño_de_Sello: "29 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.142
      },
      {
        NumeroParte: "228 S",
        Tamaño_de_Sello: "30 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.181
      },
      {
        NumeroParte: "230 S",
        Tamaño_de_Sello: "31 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.22
      },
      {
        NumeroParte: "231 S",
        Tamaño_de_Sello: "31.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.24
      },
      {
        NumeroParte: "232 S",
        Tamaño_de_Sello: "32 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.26
      },
      {
        NumeroParte: "234 S",
        Tamaño_de_Sello: "32.4 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.276
      },
      {
        NumeroParte: "236 S",
        Tamaño_de_Sello: "33 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.299
      },
      {
        NumeroParte: "238 S",
        Tamaño_de_Sello: "34 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.339
      },
      {
        NumeroParte: "240 S",
        Tamaño_de_Sello: "34.3 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.35
      },
      {
        NumeroParte: "242 S",
        Tamaño_de_Sello: "35 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.378
      },
      {
        NumeroParte: "244 S",
        Tamaño_de_Sello: "35.4 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.394
      },
      {
        NumeroParte: "246 S",
        Tamaño_de_Sello: "35.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.398
      },
      {
        NumeroParte: "248 S",
        Tamaño_de_Sello: "36 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.417
      },
      {
        NumeroParte: "250 S",
        Tamaño_de_Sello: "36.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.437
      },
      {
        NumeroParte: "252 S",
        Tamaño_de_Sello: "37 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.457
      },
      {
        NumeroParte: "253 S",
        Tamaño_de_Sello: "38 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.496
      },
      {
        NumeroParte: "254 S",
        Tamaño_de_Sello: "38.4 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.512
      },
      {
        NumeroParte: "255 S",
        Tamaño_de_Sello: "39 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.535
      },
      {
        NumeroParte: "256 S",
        Tamaño_de_Sello: "40 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.575
      },
      {
        NumeroParte: "260 S",
        Tamaño_de_Sello: "40.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.594
      },
      {
        NumeroParte: "262 S",
        Tamaño_de_Sello: "41.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.634
      },
      {
        NumeroParte: "266 S",
        Tamaño_de_Sello: "42.3 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.665
      },
      {
        NumeroParte: "268 S",
        Tamaño_de_Sello: "44 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.732
      },
      {
        NumeroParte: "272 S",
        Tamaño_de_Sello: "44.9 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.768
      },
      {
        NumeroParte: "274 S",
        Tamaño_de_Sello: "45 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.772
      },
      {
        NumeroParte: "276 S",
        Tamaño_de_Sello: "45.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.791
      },
      {
        NumeroParte: "278 S",
        Tamaño_de_Sello: "47 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.85
      },
      {
        NumeroParte: "280 S",
        Tamaño_de_Sello: "49.1 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.933
      },
      {
        NumeroParte: "282 S",
        Tamaño_de_Sello: "49.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.949
      },
      {
        NumeroParte: "284 S",
        Tamaño_de_Sello: "50 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.969
      },
      {
        NumeroParte: "286 S",
        Tamaño_de_Sello: "50.4 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 1.984
      },
      {
        NumeroParte: "287 S",
        Tamaño_de_Sello: "51 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 2.008
      },
      {
        NumeroParte: "288 S",
        Tamaño_de_Sello: "52.5 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 2.067
      },
      {
        NumeroParte: "290 S",
        Tamaño_de_Sello: "56 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 2.205
      },
      {
        NumeroParte: "292 S",
        Tamaño_de_Sello: "58 MM",
        tipo: "Cup Type",
        Diametro_recomendado_del_cilindro: 2.283
      }
    ]
  },
  {
    categoria: "Pipe Plugs",
    descripcion: "Tapones para tubería con cabeza hexagonal de acero al carbono (C.S.Hex).",
    items: [
      {
        NumeroParte: "500",
        Tamaño_de_Sello: "1/16",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "501",
        Tamaño_de_Sello: "1/8",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "502",
        Tamaño_de_Sello: "1/4",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "503",
        Tamaño_de_Sello: "3/8",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "503e",
        Tamaño_de_Sello: "3/8 e (teflon)",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "504",
        Tamaño_de_Sello: "1/2",
        Diametro_recomendado_del_cilindro: 0
      }
    ]
  },
  {
    categoria: "Brass Metric Cup Plugs",
    descripcion: "Tapones de copa métricos en latón para aplicaciones precisas con medidas en milímetros.",
    items: [
      {
        NumeroParte: "199",
        Tamaño_de_Sello: "10.8 MM",
        Diametro_recomendado_del_cilindro: 0.425
      },
      {
        NumeroParte: "200",
        Tamaño_de_Sello: "11 MM",
        Diametro_recomendado_del_cilindro: 0.433
      },
      {
        NumeroParte: "202",
        Tamaño_de_Sello: "12 MM",
        Diametro_recomendado_del_cilindro: 0.472
      },
      {
        NumeroParte: "203",
        Tamaño_de_Sello: "16.5 MM",
        Diametro_recomendado_del_cilindro: 0.65
      },
      {
        NumeroParte: "204",
        Tamaño_de_Sello: "14 MM",
        Diametro_recomendado_del_cilindro: 0.551
      },
      {
        NumeroParte: "205",
        Tamaño_de_Sello: "16 MM",
        Diametro_recomendado_del_cilindro: 0.63
      },
      {
        NumeroParte: "206",
        Tamaño_de_Sello: "17 MM",
        Diametro_recomendado_del_cilindro: 0.669
      },
      {
        NumeroParte: "208",
        Tamaño_de_Sello: "18 MM",
        Diametro_recomendado_del_cilindro: 0.709
      },
      {
        NumeroParte: "209",
        Tamaño_de_Sello: "19 MM",
        Diametro_recomendado_del_cilindro: 0.748
      },
      {
        NumeroParte: "210",
        Tamaño_de_Sello: "20 MM",
        Diametro_recomendado_del_cilindro: 0.787
      },
      {
        NumeroParte: "212",
        Tamaño_de_Sello: "21 MM",
        Diametro_recomendado_del_cilindro: 0.827
      },
      {
        NumeroParte: "214",
        Tamaño_de_Sello: "22 MM",
        Diametro_recomendado_del_cilindro: 0.866
      },
      {
        NumeroParte: "215",
        Tamaño_de_Sello: "23 MM",
        Diametro_recomendado_del_cilindro: 0.906
      },
      {
        NumeroParte: "216",
        Tamaño_de_Sello: "24 MM",
        Diametro_recomendado_del_cilindro: 0.945
      },
      {
        NumeroParte: "218",
        Tamaño_de_Sello: "25 MM",
        Diametro_recomendado_del_cilindro: 0.984
      },
      {
        NumeroParte: "220",
        Tamaño_de_Sello: "25.1 MM",
        Diametro_recomendado_del_cilindro: 0.988
      },
      {
        NumeroParte: "223",
        Tamaño_de_Sello: "26 MM",
        Diametro_recomendado_del_cilindro: 1.024
      },
      {
        NumeroParte: "201",
        Tamaño_de_Sello: "27 MM",
        Diametro_recomendado_del_cilindro: 1.063
      },
      {
        NumeroParte: "224",
        Tamaño_de_Sello: "28 MM",
        Diametro_recomendado_del_cilindro: 1.102
      },
      {
        NumeroParte: "226",
        Tamaño_de_Sello: "29 MM",
        Diametro_recomendado_del_cilindro: 1.142
      },
      {
        NumeroParte: "228",
        Tamaño_de_Sello: "30 MM",
        Diametro_recomendado_del_cilindro: 1.1811
      },
      {
        NumeroParte: "230",
        Tamaño_de_Sello: "31 MM",
        Diametro_recomendado_del_cilindro: 1.22
      },
      {
        NumeroParte: "231",
        Tamaño_de_Sello: "31.5 MM",
        Diametro_recomendado_del_cilindro: 1.24
      },
      {
        NumeroParte: "232",
        Tamaño_de_Sello: "32 MM",
        Diametro_recomendado_del_cilindro: 1.26
      },
      {
        NumeroParte: "234",
        Tamaño_de_Sello: "32.4 MM",
        Diametro_recomendado_del_cilindro: 1.276
      },
      {
        NumeroParte: "236",
        Tamaño_de_Sello: "33 MM",
        Diametro_recomendado_del_cilindro: 1.299
      },
      {
        NumeroParte: "238",
        Tamaño_de_Sello: "34 MM",
        Diametro_recomendado_del_cilindro: 1.339
      },
      {
        NumeroParte: "240",
        Tamaño_de_Sello: "34.3 MM",
        Diametro_recomendado_del_cilindro: 1.35
      },
      {
        NumeroParte: "242",
        Tamaño_de_Sello: "35 MM",
        Diametro_recomendado_del_cilindro: 1.378
      },
      {
        NumeroParte: "244",
        Tamaño_de_Sello: "35.4 MM",
        Diametro_recomendado_del_cilindro: 1.394
      },
      {
        NumeroParte: "246",
        Tamaño_de_Sello: "35.5 MM",
        Diametro_recomendado_del_cilindro: 1.398
      },
      {
        NumeroParte: "248",
        Tamaño_de_Sello: "36 MM",
        Diametro_recomendado_del_cilindro: 1.417
      },
      {
        NumeroParte: "250",
        Tamaño_de_Sello: "36.5 MM",
        Diametro_recomendado_del_cilindro: 1.437
      },
      {
        NumeroParte: "252",
        Tamaño_de_Sello: "37 MM",
        Diametro_recomendado_del_cilindro: 1.457
      },
      {
        NumeroParte: "253",
        Tamaño_de_Sello: "38 MM",
        Diametro_recomendado_del_cilindro: 1.496
      },
      {
        NumeroParte: "254",
        Tamaño_de_Sello: "38.4 MM",
        Diametro_recomendado_del_cilindro: 1.512
      },
      {
        NumeroParte: "255",
        Tamaño_de_Sello: "39 MM",
        Diametro_recomendado_del_cilindro: 1.535
      },
      {
        NumeroParte: "256",
        Tamaño_de_Sello: "40 MM",
        Diametro_recomendado_del_cilindro: 1.575
      },
      {
        NumeroParte: "260",
        Tamaño_de_Sello: "40.5 MM",
        Diametro_recomendado_del_cilindro: 1.594
      },
      {
        NumeroParte: "262",
        Tamaño_de_Sello: "41.5 MM",
        Diametro_recomendado_del_cilindro: 1.634
      },
      {
        NumeroParte: "266",
        Tamaño_de_Sello: "42.3 MM",
        Diametro_recomendado_del_cilindro: 1.665
      },
      {
        NumeroParte: "268",
        Tamaño_de_Sello: "44 MM",
        Diametro_recomendado_del_cilindro: 1.732
      },
      {
        NumeroParte: "272",
        Tamaño_de_Sello: "44.9 MM",
        Diametro_recomendado_del_cilindro: 1.768
      },
      {
        NumeroParte: "274",
        Tamaño_de_Sello: "45 MM",
        Diametro_recomendado_del_cilindro: 1.772
      },
      {
        NumeroParte: "276",
        Tamaño_de_Sello: "45.5 MM",
        Diametro_recomendado_del_cilindro: 1.7913
      },
      {
        NumeroParte: "278",
        Tamaño_de_Sello: "47 MM",
        Diametro_recomendado_del_cilindro: 1.85
      },
      {
        NumeroParte: "280",
        Tamaño_de_Sello: "49.1 MM",
        Diametro_recomendado_del_cilindro: 1.933
      },
      {
        NumeroParte: "282",
        Tamaño_de_Sello: "49.5 MM",
        Diametro_recomendado_del_cilindro: 1.949
      },
      {
        NumeroParte: "284",
        Tamaño_de_Sello: "50 MM",
        Diametro_recomendado_del_cilindro: 1.969
      },
      {
        NumeroParte: "286",
        Tamaño_de_Sello: "50.4 MM",
        Diametro_recomendado_del_cilindro: 1.984
      },
      {
        NumeroParte: "287",
        Tamaño_de_Sello: "51 MM",
        Diametro_recomendado_del_cilindro: 2.008
      },
      {
        NumeroParte: "288",
        Tamaño_de_Sello: "52.5 MM",
        Diametro_recomendado_del_cilindro: 2.067
      },
      {
        NumeroParte: "290",
        Tamaño_de_Sello: "56 MM",
        Diametro_recomendado_del_cilindro: 2.205
      },
      {
        NumeroParte: "292",
        Tamaño_de_Sello: "58 MM",
        Diametro_recomendado_del_cilindro: 2.283
      }
    ]
  },
  {
    categoria: "Concave Cup Plugs",
    descripcion: "Tapones de copa cóncava para aplicaciones especializadas.",
    items: [
      {
        NumeroParte: "130 CC",
        Tamaño_de_Sello: "1\"",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "137 CC",
        Tamaño_de_Sello: "1\" 1/4",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "140 CC",
        Tamaño_de_Sello: "1\" 3/8",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "146 CC",
        Tamaño_de_Sello: "1\" 1/2",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "148 CC",
        Tamaño_de_Sello: "1\" 5/8",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "153 CC",
        Tamaño_de_Sello: "1\" 3/4",
        Diametro_recomendado_del_cilindro: 0
      },
      {
        NumeroParte: "170 CC",
        Tamaño_de_Sello: "2\"",
        Diametro_recomendado_del_cilindro: 0
      }
    ]
  },
  {
    categoria: "Stainless Steel Cup Plugs",
    descripcion: "Tapones de copa en acero inoxidable para aplicaciones que requieren resistencia a la corrosión.",
    items: [
      {
        NumeroParte: "124 SS",
        Tamaño_de_Sello: "3/4",
        Diametro_recomendado_del_cilindro: 19.05
      },
      {
        NumeroParte: "126 SS",
        Tamaño_de_Sello: "7/8",
        Diametro_recomendado_del_cilindro: 22.23
      },
      {
        NumeroParte: "130 SS",
        Tamaño_de_Sello: "1",
        Diametro_recomendado_del_cilindro: 25.4
      },
      {
        NumeroParte: "133 SS",
        Tamaño_de_Sello: "1 1/8",
        Diametro_recomendado_del_cilindro: 28.58
      },
      {
        NumeroParte: "137 SS",
        Tamaño_de_Sello: "1\" 1/4",
        Diametro_recomendado_del_cilindro: 31.75
      },
      {
        NumeroParte: "140 SS",
        Tamaño_de_Sello: "1\" 3/8",
        Diametro_recomendado_del_cilindro: 34.93
      },
      {
        NumeroParte: "146 SS",
        Tamaño_de_Sello: "1\" 1/2",
        Diametro_recomendado_del_cilindro: 38.1
      },
      {
        NumeroParte: "148 SS",
        Tamaño_de_Sello: "1\" 5/8",
        Diametro_recomendado_del_cilindro: 41.28
      },
      {
        NumeroParte: "153 SS",
        Tamaño_de_Sello: "1\" 3/4",
        Diametro_recomendado_del_cilindro: 44.45
      },
      {
        NumeroParte: "240 SS",
        Tamaño_de_Sello: "34.3 MM",
        Diametro_recomendado_del_cilindro: 1.35
      },
      {
        NumeroParte: "240e SS",
        Tamaño_de_Sello: "34.3 esp",
        Diametro_recomendado_del_cilindro: 1.33
      },
      {
        NumeroParte: "290 SS",
        Tamaño_de_Sello: "56 mm",
        Diametro_recomendado_del_cilindro: 2.204
      }
    ]
  },
  {
    categoria: "Steel Cup Plugs",
    descripcion: "Tapones de copa en acero para aplicaciones industriales de alta resistencia.",
    items: [
      {
        NumeroParte: "102 S",
        Tamaño_de_Sello: "5/16",
        Diametro_recomendado_del_cilindro: 0.313
      },
      {
        NumeroParte: "103 S",
        Tamaño_de_Sello: "3/8",
        Diametro_recomendado_del_cilindro: 0.375
      },
      {
        NumeroParte: "104 S",
        Tamaño_de_Sello: "13/32",
        Diametro_recomendado_del_cilindro: 0.406
      },
      {
        NumeroParte: "106 S",
        Tamaño_de_Sello: "27/64",
        Diametro_recomendado_del_cilindro: 0.422
      },
      {
        NumeroParte: "107 S",
        Tamaño_de_Sello: "7/16",
        Diametro_recomendado_del_cilindro: 0.438
      },
      {
        NumeroParte: "108 S",
        Tamaño_de_Sello: "29/64",
        Diametro_recomendado_del_cilindro: 0.453
      },
      {
        NumeroParte: "109 S",
        Tamaño_de_Sello: "1/2",
        Diametro_recomendado_del_cilindro: 0.5
      },
      {
        NumeroParte: "112 S",
        Tamaño_de_Sello: "33/64",
        Diametro_recomendado_del_cilindro: 0.515
      },
      {
        NumeroParte: "113 S",
        Tamaño_de_Sello: "17/32",
        Diametro_recomendado_del_cilindro: 0.531
      },
      {
        NumeroParte: "114 S",
        Tamaño_de_Sello: "9/16",
        Diametro_recomendado_del_cilindro: 0.563
      },
      {
        NumeroParte: "115 S",
        Tamaño_de_Sello: "37/64",
        Diametro_recomendado_del_cilindro: 0.578
      },
      {
        NumeroParte: "116 S",
        Tamaño_de_Sello: "19/32",
        Diametro_recomendado_del_cilindro: 0.593
      },
      {
        NumeroParte: "117 S",
        Tamaño_de_Sello: "39/64",
        Diametro_recomendado_del_cilindro: 0.609
      },
      {
        NumeroParte: "118 S",
        Tamaño_de_Sello: "5/8",
        Diametro_recomendado_del_cilindro: 0.625
      },
      {
        NumeroParte: "119 S",
        Tamaño_de_Sello: "41/64",
        Diametro_recomendado_del_cilindro: 0.64
      },
      {
        NumeroParte: "120 S",
        Tamaño_de_Sello: "21/32",
        Diametro_recomendado_del_cilindro: 0.656
      },
      {
        NumeroParte: "123 S",
        Tamaño_de_Sello: "11/16",
        Diametro_recomendado_del_cilindro: 0.688
      },
      {
        NumeroParte: "124 S",
        Tamaño_de_Sello: "3/4",
        Diametro_recomendado_del_cilindro: 0.75
      },
      {
        NumeroParte: "126 S",
        Tamaño_de_Sello: "13/16",
        Diametro_recomendado_del_cilindro: 0.813
      },
      {
        NumeroParte: "126 S",
        Tamaño_de_Sello: "7/8",
        Diametro_recomendado_del_cilindro: 0.875
      },
      {
        NumeroParte: "128 S",
        Tamaño_de_Sello: "29/32",
        Diametro_recomendado_del_cilindro: 0.906
      },
      {
        NumeroParte: "129 S",
        Tamaño_de_Sello: "15/16",
        Diametro_recomendado_del_cilindro: 0.938
      },
      {
        NumeroParte: "130 S",
        Tamaño_de_Sello: "1\"",
        Diametro_recomendado_del_cilindro: 1
      },
      {
        NumeroParte: "132 S",
        Tamaño_de_Sello: "1\" 1/16",
        Diametro_recomendado_del_cilindro: 1.063
      },
      {
        NumeroParte: "133 S",
        Tamaño_de_Sello: "1\" 1/8",
        Diametro_recomendado_del_cilindro: 1.125
      },
      {
        NumeroParte: "135 S",
        Tamaño_de_Sello: "1\" 3/16",
        Diametro_recomendado_del_cilindro: 1.188
      },
      {
        NumeroParte: "136 S",
        Tamaño_de_Sello: "1\" 7/32",
        Diametro_recomendado_del_cilindro: 1.219
      },
      {
        NumeroParte: "137 S",
        Tamaño_de_Sello: "1\" 1/4",
        Diametro_recomendado_del_cilindro: 1.25
      },
      {
        NumeroParte: "138 S",
        Tamaño_de_Sello: "1\" 5/16",
        Diametro_recomendado_del_cilindro: 1.313
      },
      {
        NumeroParte: "139 S",
        Tamaño_de_Sello: "1\" 21/64",
        Diametro_recomendado_del_cilindro: 1.328
      },
      {
        NumeroParte: "140 S",
        Tamaño_de_Sello: "1\" 3/8",
        Diametro_recomendado_del_cilindro: 1.375
      },
      {
        NumeroParte: "143 S",
        Tamaño_de_Sello: "1\" 7/16",
        Diametro_recomendado_del_cilindro: 1.438
      },
      {
        NumeroParte: "144 S",
        Tamaño_de_Sello: "1\" 31/32",
        Diametro_recomendado_del_cilindro: 1.969
      },
      {
        NumeroParte: "146 S",
        Tamaño_de_Sello: "1\" 1/2",
        Diametro_recomendado_del_cilindro: 1.5
      },
      {
        NumeroParte: "147 S",
        Tamaño_de_Sello: "1\" 9/16",
        Diametro_recomendado_del_cilindro: 1.563
      },
      {
        NumeroParte: "148 S",
        Tamaño_de_Sello: "1\" 5/8",
        Diametro_recomendado_del_cilindro: 1.625
      },
      {
        NumeroParte: "149 S",
        Tamaño_de_Sello: "1\" 41/64",
        Diametro_recomendado_del_cilindro: 1.641
      },
      {
        NumeroParte: "151 S",
        Tamaño_de_Sello: "1\" 11/16",
        Diametro_recomendado_del_cilindro: 1.688
      },
      {
        NumeroParte: "152 S",
        Tamaño_de_Sello: "1\" 45/64",
        Diametro_recomendado_del_cilindro: 1.703
      },
      {
        NumeroParte: "153 S",
        Tamaño_de_Sello: "1\" 3/4",
        Diametro_recomendado_del_cilindro: 1.75
      },
      {
        NumeroParte: "154 S",
        Tamaño_de_Sello: "1\" 49/64",
        Diametro_recomendado_del_cilindro: 1.766
      },
      {
        NumeroParte: "156 S",
        Tamaño_de_Sello: "1\" 25/32",
        Diametro_recomendado_del_cilindro: 1.781
      },
      {
        NumeroParte: "157 S",
        Tamaño_de_Sello: "1\" 51/64",
        Diametro_recomendado_del_cilindro: 1.796
      },
      {
        NumeroParte: "158 S",
        Tamaño_de_Sello: "1\" 13/16",
        Diametro_recomendado_del_cilindro: 1.813
      },
      {
        NumeroParte: "160 S",
        Tamaño_de_Sello: "1\" 7/8",
        Diametro_recomendado_del_cilindro: 1.875
      },
      {
        NumeroParte: "161 S",
        Tamaño_de_Sello: "1\" 29/32",
        Diametro_recomendado_del_cilindro: 1.906
      },
      {
        NumeroParte: "162 S",
        Tamaño_de_Sello: "1\" 59/64",
        Diametro_recomendado_del_cilindro: 1.922
      },
      {
        NumeroParte: "163 S",
        Tamaño_de_Sello: "1\" 15/16",
        Diametro_recomendado_del_cilindro: 1.938
      },
      {
        NumeroParte: "165 S",
        Tamaño_de_Sello: "1\" 61/64",
        Diametro_recomendado_del_cilindro: 1.953
      },
      {
        NumeroParte: "166 S",
        Tamaño_de_Sello: "1\" 31/32",
        Diametro_recomendado_del_cilindro: 1.969
      },
      {
        NumeroParte: "167 S",
        Tamaño_de_Sello: "1\" 63/64",
        Diametro_recomendado_del_cilindro: 1.984
      },
      {
        NumeroParte: "170 S",
        Tamaño_de_Sello: "2\"",
        Diametro_recomendado_del_cilindro: 2
      },
      {
        NumeroParte: "171 S",
        Tamaño_de_Sello: "2\" 1/64",
        Diametro_recomendado_del_cilindro: 2.016
      },
      {
        NumeroParte: "172 S",
        Tamaño_de_Sello: "2\" 3/64",
        Diametro_recomendado_del_cilindro: 2.047
      },
      {
        NumeroParte: "173 S",
        Tamaño_de_Sello: "2\" 1/16",
        Diametro_recomendado_del_cilindro: 2.063
      },
      {
        NumeroParte: "175 S",
        Tamaño_de_Sello: "2\" 3/32",
        Diametro_recomendado_del_cilindro: 2.094
      },
      {
        NumeroParte: "176 S",
        Tamaño_de_Sello: "2\" 7/64",
        Diametro_recomendado_del_cilindro: 2.109
      },
      {
        NumeroParte: "177 S",
        Tamaño_de_Sello: "2\" 1/8",
        Diametro_recomendado_del_cilindro: 2.125
      },
      {
        NumeroParte: "178 S",
        Tamaño_de_Sello: "2\" 9/64",
        Diametro_recomendado_del_cilindro: 2.141
      },
      {
        NumeroParte: "180 S",
        Tamaño_de_Sello: "2\" 5/32",
        Diametro_recomendado_del_cilindro: 2.156
      },
      {
        NumeroParte: "181 S",
        Tamaño_de_Sello: "2\" 3/16",
        Diametro_recomendado_del_cilindro: 2.188
      },
      {
        NumeroParte: "182 S",
        Tamaño_de_Sello: "2\" 13/64",
        Diametro_recomendado_del_cilindro: 2.203
      },
      {
        NumeroParte: "183 S",
        Tamaño_de_Sello: "2\" 7/32",
        Diametro_recomendado_del_cilindro: 2.219
      },
      {
        NumeroParte: "184 S",
        Tamaño_de_Sello: "2\" 1/4",
        Diametro_recomendado_del_cilindro: 2.25
      },
      {
        NumeroParte: "185 S",
        Tamaño_de_Sello: "2\" 3/8",
        Diametro_recomendado_del_cilindro: 2.375
      },
      {
        NumeroParte: "186 S",
        Tamaño_de_Sello: "2\" 1/2",
        Diametro_recomendado_del_cilindro: 2.5
      },
      {
        NumeroParte: "187 S",
        Tamaño_de_Sello: "2\" 9/16",
        Diametro_recomendado_del_cilindro: 2.563
      },
      {
        NumeroParte: "188 S",
        Tamaño_de_Sello: "2\" 3/4",
        Diametro_recomendado_del_cilindro: 2.75
      }
    ]
  },
  {
    categoria: "Brass Cup Plugs",
    descripcion: "Tapones de copa en latón para aplicaciones que requieren resistencia a la corrosión y conductividad.",
    items: [
      {
        NumeroParte: "102",
        Tamaño_de_Sello: "5/16",
        Diametro_recomendado_del_cilindro: 0.313
      },
      {
        NumeroParte: "103",
        Tamaño_de_Sello: "3/8",
        Diametro_recomendado_del_cilindro: 0.375
      },
      {
        NumeroParte: "104",
        Tamaño_de_Sello: "13/32",
        Diametro_recomendado_del_cilindro: 0.406
      },
      {
        NumeroParte: "106",
        Tamaño_de_Sello: "27/64",
        Diametro_recomendado_del_cilindro: 0.422
      },
      {
        NumeroParte: "107",
        Tamaño_de_Sello: "7/16",
        Diametro_recomendado_del_cilindro: 0.438
      },
      {
        NumeroParte: "108",
        Tamaño_de_Sello: "29/64",
        Diametro_recomendado_del_cilindro: 0.453
      },
      {
        NumeroParte: "109",
        Tamaño_de_Sello: "1/2",
        Diametro_recomendado_del_cilindro: 0.5
      },
      {
        NumeroParte: "112",
        Tamaño_de_Sello: "33/64",
        Diametro_recomendado_del_cilindro: 0.516
      },
      {
        NumeroParte: "113",
        Tamaño_de_Sello: "17/32",
        Diametro_recomendado_del_cilindro: 0.531
      },
      {
        NumeroParte: "114",
        Tamaño_de_Sello: "9/16",
        Diametro_recomendado_del_cilindro: 0.563
      },
      {
        NumeroParte: "115",
        Tamaño_de_Sello: "37/64",
        Diametro_recomendado_del_cilindro: 0.578
      },
      {
        NumeroParte: "116",
        Tamaño_de_Sello: "19/32",
        Diametro_recomendado_del_cilindro: 0.593
      },
      {
        NumeroParte: "117",
        Tamaño_de_Sello: "39/64",
        Diametro_recomendado_del_cilindro: 0.609
      },
      {
        NumeroParte: "118",
        Tamaño_de_Sello: "5/8",
        Diametro_recomendado_del_cilindro: 0.625
      },
      {
        NumeroParte: "119",
        Tamaño_de_Sello: "41/64",
        Diametro_recomendado_del_cilindro: 0.64
      },
      {
        NumeroParte: "120",
        Tamaño_de_Sello: "21/32",
        Diametro_recomendado_del_cilindro: 0.656
      },
      {
        NumeroParte: "123",
        Tamaño_de_Sello: "11/16",
        Diametro_recomendado_del_cilindro: 0.688
      },
      {
        NumeroParte: "124",
        Tamaño_de_Sello: "3/4",
        Diametro_recomendado_del_cilindro: 0.75
      },
      {
        NumeroParte: "126",
        Tamaño_de_Sello: "13/16",
        Diametro_recomendado_del_cilindro: 0.813
      },
      {
        NumeroParte: "126",
        Tamaño_de_Sello: "7/8",
        Diametro_recomendado_del_cilindro: 0.875
      },
      {
        NumeroParte: "128",
        Tamaño_de_Sello: "29/32",
        Diametro_recomendado_del_cilindro: 0.906
      },
      {
        NumeroParte: "129",
        Tamaño_de_Sello: "15/16",
        Diametro_recomendado_del_cilindro: 0.938
      },
      {
        NumeroParte: "130",
        Tamaño_de_Sello: "1\"",
        Diametro_recomendado_del_cilindro: 1
      },
      {
        NumeroParte: "132",
        Tamaño_de_Sello: "1\" 1/16",
        Diametro_recomendado_del_cilindro: 1.0625
      },
      {
        NumeroParte: "133",
        Tamaño_de_Sello: "1\" 1/8",
        Diametro_recomendado_del_cilindro: 1.125
      },
      {
        NumeroParte: "135",
        Tamaño_de_Sello: "1\" 3/16",
        Diametro_recomendado_del_cilindro: 1.1875
      },
      {
        NumeroParte: "136",
        Tamaño_de_Sello: "1\" 7/32",
        Diametro_recomendado_del_cilindro: 1.2188
      },
      {
        NumeroParte: "137",
        Tamaño_de_Sello: "1\" 1/4",
        Diametro_recomendado_del_cilindro: 1.25
      },
      {
        NumeroParte: "138",
        Tamaño_de_Sello: "1\" 5/16",
        Diametro_recomendado_del_cilindro: 1.3125
      },
      {
        NumeroParte: "139",
        Tamaño_de_Sello: "1\" 21/64",
        Diametro_recomendado_del_cilindro: 1.328
      },
      {
        NumeroParte: "140",
        Tamaño_de_Sello: "1\" 3/8",
        Diametro_recomendado_del_cilindro: 1.375
      },
      {
        NumeroParte: "143",
        Tamaño_de_Sello: "1\" 7/16",
        Diametro_recomendado_del_cilindro: 1.4375
      },
      {
        NumeroParte: "144",
        Tamaño_de_Sello: "1\" 31/64",
        Diametro_recomendado_del_cilindro: 1.4843
      },
      {
        NumeroParte: "146",
        Tamaño_de_Sello: "1\" 1/2",
        Diametro_recomendado_del_cilindro: 1.5
      },
      {
        NumeroParte: "147",
        Tamaño_de_Sello: "1\" 9/16",
        Diametro_recomendado_del_cilindro: 1.5625
      },
      {
        NumeroParte: "148",
        Tamaño_de_Sello: "1\" 5/8",
        Diametro_recomendado_del_cilindro: 1.625
      },
      {
        NumeroParte: "149",
        Tamaño_de_Sello: "1\" 41/64",
        Diametro_recomendado_del_cilindro: 1.6406
      },
      {
        NumeroParte: "151",
        Tamaño_de_Sello: "1\" 11/16",
        Diametro_recomendado_del_cilindro: 1.6875
      },
      {
        NumeroParte: "152",
        Tamaño_de_Sello: "1\" 45/64",
        Diametro_recomendado_del_cilindro: 1.703
      },
      {
        NumeroParte: "153",
        Tamaño_de_Sello: "1\" 3/4",
        Diametro_recomendado_del_cilindro: 1.75
      },
      {
        NumeroParte: "154",
        Tamaño_de_Sello: "1\" 49/64",
        Diametro_recomendado_del_cilindro: 1.766
      },
      {
        NumeroParte: "156",
        Tamaño_de_Sello: "1\" 25/32",
        Diametro_recomendado_del_cilindro: 1.781
      },
      {
        NumeroParte: "157",
        Tamaño_de_Sello: "1\" 51/64",
        Diametro_recomendado_del_cilindro: 1.796
      },
      {
        NumeroParte: "158",
        Tamaño_de_Sello: "1\" 13/16",
        Diametro_recomendado_del_cilindro: 1.813
      },
      {
        NumeroParte: "160",
        Tamaño_de_Sello: "1\" 7/8",
        Diametro_recomendado_del_cilindro: 1.875
      },
      {
        NumeroParte: "161",
        Tamaño_de_Sello: "1\" 29/32",
        Diametro_recomendado_del_cilindro: 1.906
      },
      {
        NumeroParte: "162",
        Tamaño_de_Sello: "1\" 59/64",
        Diametro_recomendado_del_cilindro: 1.922
      },
      {
        NumeroParte: "163",
        Tamaño_de_Sello: "1\" 15/16",
        Diametro_recomendado_del_cilindro: 1.938
      },
      {
        NumeroParte: "165",
        Tamaño_de_Sello: "1\" 61/64",
        Diametro_recomendado_del_cilindro: 1.953
      },
      {
        NumeroParte: "166",
        Tamaño_de_Sello: "1\" 31/32",
        Diametro_recomendado_del_cilindro: 1.969
      },
      {
        NumeroParte: "167",
        Tamaño_de_Sello: "1\" 63/64",
        Diametro_recomendado_del_cilindro: 1.984
      },
      {
        NumeroParte: "170",
        Tamaño_de_Sello: "2\"",
        Diametro_recomendado_del_cilindro: 2
      },
      {
        NumeroParte: "171",
        Tamaño_de_Sello: "2\" 1/64",
        Diametro_recomendado_del_cilindro: 2.016
      },
      {
        NumeroParte: "172",
        Tamaño_de_Sello: "2\" 3/64",
        Diametro_recomendado_del_cilindro: 2.047
      },
      {
        NumeroParte: "173",
        Tamaño_de_Sello: "2\" 1/16",
        Diametro_recomendado_del_cilindro: 2.063
      },
      {
        NumeroParte: "175",
        Tamaño_de_Sello: "2\" 3/32",
        Diametro_recomendado_del_cilindro: 2.094
      },
      {
        NumeroParte: "176",
        Tamaño_de_Sello: "2\" 7/64",
        Diametro_recomendado_del_cilindro: 2.109
      },
      {
        NumeroParte: "177",
        Tamaño_de_Sello: "2\" 1/8",
        Diametro_recomendado_del_cilindro: 2.125
      },
      {
        NumeroParte: "178",
        Tamaño_de_Sello: "2\" 9/64",
        Diametro_recomendado_del_cilindro: 2.141
      },
      {
        NumeroParte: "180",
        Tamaño_de_Sello: "2\" 5/32",
        Diametro_recomendado_del_cilindro: 2.156
      },
      {
        NumeroParte: "181",
        Tamaño_de_Sello: "2\" 3/16",
        Diametro_recomendado_del_cilindro: 2.188
      },
      {
        NumeroParte: "182",
        Tamaño_de_Sello: "2\" 13/64",
        Diametro_recomendado_del_cilindro: 2.203
      },
      {
        NumeroParte: "183",
        Tamaño_de_Sello: "2\" 7/32",
        Diametro_recomendado_del_cilindro: 2.219
      },
      {
        NumeroParte: "184",
        Tamaño_de_Sello: "2\" 1/4",
        Diametro_recomendado_del_cilindro: 2.25
      },
      {
        NumeroParte: "185",
        Tamaño_de_Sello: "2\" 3/8",
        Diametro_recomendado_del_cilindro: 2.375
      },
      {
        NumeroParte: "186",
        Tamaño_de_Sello: "2\" 1/2",
        Diametro_recomendado_del_cilindro: 2.5
      },
      {
        NumeroParte: "187",
        Tamaño_de_Sello: "2\" 9/16",
        Diametro_recomendado_del_cilindro: 2.563
      },
      {
        NumeroParte: "188",
        Tamaño_de_Sello: "2\" 3/4",
        Diametro_recomendado_del_cilindro: 2.75
      }
    ]
  }
];

const PlugsIndividuales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, getItemQuantity, updateQuantity } = useCart();
  
  const filteredCategories = plugsData.map(category => ({
    ...category,
    items: category.items.filter(plug => {
      const q = searchTerm.toLowerCase();
      // Safely convert Diametro_recomendado_del_cilindro to a string for search
      const diametroString = plug.Diametro_recomendado_del_cilindro !== undefined 
        ? plug.Diametro_recomendado_del_cilindro.toString() 
        : "";

      return (
        (plug.NumeroParte?.toLowerCase?.().includes(q)) ||
        (plug.Tamaño_de_Sello?.toLowerCase?.().includes(q)) ||
        (diametroString.includes(q)) ||
        category.categoria.toLowerCase().includes(q)
      );
    })
  })).filter(category => category.items.length > 0);
  
  // Removed the duplicate map/filter block here.

  const handleAddToCart = (plug: IndividualPlug) => {
    addItem({
      id: plug.NumeroParte,
      name: `${plug.NumeroParte} - ${plug.Tamaño_de_Sello}`,
      type: 'individual',
      details: `${plug.tipo ?? ""} | ${plug.material ?? ""} | ${plug.aplicacion ?? ""}`
    });
    toast.success("Agregado al carrito", {
      description: `${plug.NumeroParte} - ${plug.Tamaño_de_Sello}`
    });
    // Removed the duplicate toast/addItem block here, which was using incorrect prop names (plug.numeroParte, plug.diametro)
  };

  const handleIncrement = (id: string) => {
    const currentQty = getItemQuantity(id);
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrement = (id: string) => {
    const currentQty = getItemQuantity(id);
    if (currentQty > 0) {
      updateQuantity(id, currentQty - 1);
    }
  };

  const handleQuantityChange = (id: string, value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      updateQuantity(id, numValue);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                  Tapones de Congelación <span className="text-primary">Individuales</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Selección completa de freeze plugs individuales para todas tus necesidades de reparación.
                </p>
                
                <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 max-w-2xl mx-auto mb-8">
                  <p className="font-bold text-lg">
                    ⚠️ Pedido Mínimo: 50 piezas por orden
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Para pedidos menores, consulte disponibilidad
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar por número de parte, diámetro, tipo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {filteredCategories.map((category, categoryIndex) => (
                  <AccordionItem 
                    key={categoryIndex} 
                    value={category.categoria}
                    className="bg-card rounded-lg shadow-lg border-2 border-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-muted/50">
                      <div className="flex-1 text-left pr-4">
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {category.categoria}
                        </h3>
                        <p className="text-sm text-muted-foreground font-normal">
                          {category.descripcion}
                        </p>
                        <p className="text-xs text-accent font-semibold mt-2">
                          {category.items.length} productos disponibles
                        </p>
                      </div>
                    </AccordionTrigger>
                    {/* Removed duplicate closing tags for AccordionTrigger and its content here */}
                    <AccordionContent className="p-4 border-t border-border space-y-3">
                        {category.items.map((plug, plugIndex) => {
                          const id = plug.NumeroParte;
                          const quantity = getItemQuantity(id);
                          return (
                            <Card key={plugIndex} className="border-2 hover:border-accent/50 transition-colors">
                              <CardContent className="p-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                  <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                                    <div>
                                      <p className="text-muted-foreground text-xs">Número de Parte</p>
                                      <p className="font-bold text-primary">{plug.NumeroParte}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Diámetro</p>
                                      <p className="font-semibold">{plug.Tamaño_de_Sello}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Tipo</p>
                                      <p className="font-semibold">{plug.tipo ?? "-"}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Material</p>
                                      <p className="font-semibold">{plug.material ?? "-"}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Aplicación</p>
                                      <p className="font-semibold">{plug.aplicacion ?? "-"}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-3 md:w-64">
                                    {quantity === 0 ? (
                                      <Button
                                        variant="racing"
                                        className="w-full"
                                        // Prevents accordion from closing when adding to cart
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(plug); }}
                                      >
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Agregar
                                      </Button>
                                    ) : (
                                      <div className="flex items-center gap-2 bg-muted rounded-md p-2 w-full" onClick={(e) => e.stopPropagation()}>
                                        <Button
                                          size="icon"
                                          variant="ghost"
                                          className="h-8 w-8"
                                          onClick={() => handleDecrement(id)}
                                        >
                                          <Minus className="w-4 h-4" />
                                        </Button>
                                        <Input
                                          type="number"
                                          min="0"
                                          value={quantity}
                                          onChange={(e) => handleQuantityChange(id, e.target.value)}
                                          className="w-16 text-center font-bold h-8 px-1"
                                        />
                                        <Button
                                          size="icon"
                                          variant="ghost"
                                          className="h-8 w-8"
                                          onClick={() => handleIncrement(id)}
                                        >
                                          <Plus className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No se encontraron productos que coincidan con tu búsqueda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlugsIndividuales;