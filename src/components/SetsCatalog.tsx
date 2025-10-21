import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import freezePlugSetsImage from "@/assets/sellos1.jpg";

interface SetItem {
  numeroParte: string;
  ano: string;
  cilindros: string;
  aplicacion: string;
  usTool: string;
  pioneer: string;
  locacion: string;
  cantidad: string;
}

interface BrandCatalog {
  marca: string;
  items: SetItem[];
}

const catalogData: BrandCatalog[] = [
  {
    marca: "GENERAL MOTORS",
    items: [
      { numeroParte: "GM-110", ano: "82-85", cilindros: "4 CYL", aplicacion: "110(1.8), 121(2.0L) B.P.I, 112J,0,G", usTool: "EPK-096B", pioneer: "PE-173-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-121", ano: "85-91", cilindros: "4 CYL", aplicacion: "121 (2.0)B,P,I", usTool: "EPK-096B", pioneer: "PE-183-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-151", ano: "78-85", cilindros: "4 CYL", aplicacion: "151(2.5L),RENGINE (Except Olsmobile)", usTool: "EPK-074B", pioneer: "PE-163-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-151/2", ano: "86-93", cilindros: "4 CYL", aplicacion: "151(2.5L),RENGINE (Except Olsmobile)", usTool: "EPK-120B", pioneer: "PE-163-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-173", ano: "80-92", cilindros: "6 CYL", aplicacion: "173 (2.8L)", usTool: "EPK-075B", pioneer: "PE-165-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-191", ano: "88-96", cilindros: "6 CYL", aplicacion: "191 (3.1L)", usTool: "EPK-128B", pioneer: "PE-276-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-204", ano: "91-93", cilindros: "6 CYL", aplicacion: "204 (3.3)", usTool: "EPK-123B", pioneer: "PE-244-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-231/3", ano: "95-97", cilindros: "6 CYL", aplicacion: "231 (3.8)", usTool: "EPK-151B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350", ano: "68-85", cilindros: "8 CYL", aplicacion: "265, 267, 283, 302, 305, 307, 327, 350(5.7)", usTool: "EPK-008B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/2", ano: "86-98", cilindros: "8 CYL", aplicacion: "267 (4.4), 283, 302, 305(5.0) 307, 350L(5.7)", usTool: "EPK-100B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/3", ano: "92-96", cilindros: "8 CYL", aplicacion: "305 (5.0), 307, 350L (5.7) VIN CODE 7", usTool: "EPK-158B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350D", ano: "64-92", cilindros: "8 CYL", aplicacion: "350 (5.7) R,N, DIESEL", usTool: "EPK-025B", pioneer: "PE-124-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-403", ano: "77-79", cilindros: "8 CYL", aplicacion: "403 (6.6)", usTool: "EPK-076B", pioneer: "PE-124-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "VOLKSWAGEN",
    items: [
      { numeroParte: "VW-1600", ano: "78-83", cilindros: "4 CYL", aplicacion: "1500cc, 1600cc Water Cooler", usTool: "EPK-028B", pioneer: "PE-144-BR", locacion: "Block", cantidad: "4" },
      { numeroParte: "VW-1715", ano: "82-92", cilindros: "4 CYL", aplicacion: "1588cc (1.6L) 1715cc (1.7L) Golf, Jetta, Quantum, Rabbit, Vanagon", usTool: "", pioneer: "", locacion: "Cylinder Head, Block", cantidad: "1, 4, 2" },
      { numeroParte: "VW-1780", ano: "83-93", cilindros: "4 CYL", aplicacion: "1780CC(1.8)JH,JN,RD,HT,PF,RV,UM.GX", usTool: "EPK-130B", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "TOYOTA",
    items: [
      { numeroParte: "TO-1077", ano: "68-84", cilindros: "4 CYL", aplicacion: "1077CCK.C.1166CC,3K.3KC129OCC(1.3)4KC,4KE", usTool: "EPK-043B", pioneer: "PE-194-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1452", ano: "80-89", cilindros: "4 CYL", aplicacion: "1452CC(1.5L) 1AC,3AC1587CC(1.64AC 4ALC", usTool: "EPK-116B", pioneer: "PE-194-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1452/2", ano: "80-89", cilindros: "4 CYL", aplicacion: "1452CC(1.5L)", usTool: "EPK-116B", pioneer: "PE-271-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1456", ano: "87-96", cilindros: "4 CYL", aplicacion: "1456(1.5)3E,3EE,1497CC(1.5)5EFE", usTool: "EPK-160B", pioneer: "PE-194-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1587", ano: "84-89", cilindros: "4 CYL", aplicacion: "1452CC(1.5L),1587CC(1.6L)", usTool: "EPK-116B", pioneer: "PE-133-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1588", ano: "68-83", cilindros: "4 CYL", aplicacion: "1588CC(1.6L),2T,2TC,1770CC(1.8L)3TC", usTool: "EPK-044B", pioneer: "PE-135-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-1897", ano: "64-70", cilindros: "4 CYL", aplicacion: "1897CC(1.9L)3R,3RB,3RC", usTool: "EPK-045B", pioneer: "PE-212-R", locacion: "", cantidad: "" },
      { numeroParte: "TO-1995", ano: "87-96", cilindros: "4 CYL", aplicacion: "1995CC(2.0L),2SELEC,3SFE,3SGELC,3SGTE,2164CC(2.2L)5SFE", usTool: "EPK-156B", pioneer: "PE-136-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-2000", ano: "69-74", cilindros: "4 CYL", aplicacion: "1858CC(1.9)8R,2000CC(2.0)8RC", usTool: "EPK-046B", pioneer: "PE-140-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-2200", ano: "74-86", cilindros: "4 CYL", aplicacion: "2200CC(2.2)2OR2367CC(2.4L)22R,22REC,22RTEC", usTool: "EPK-068B", pioneer: "PE-300-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-2237", ano: "86-91", cilindros: "4 CYL", aplicacion: "2237CC(2.2L)4YEC DOHC, 3YEC OHV", usTool: "EPK-132B", pioneer: "PE-138-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-2253", ano: "71-88", cilindros: "6 CYL", aplicacion: "2253CC(2.3L)2M,2563CC(2.6)4M,4ME,2759CC(2.8L)5ME", usTool: "EPK-077B", pioneer: "PE-255-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-2507", ano: "88-95", cilindros: "6 CYL", aplicacion: "2507CC(2.5L)2VZFE,2958CC(3.0L)3VZE,3VZFE", usTool: "EPK-159B", pioneer: "PE-141-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-3900", ano: "75-87", cilindros: "6 CYL", aplicacion: "2F 3900CC(3.9L)", usTool: "EPK-070B", pioneer: "PE-142-BR", locacion: "", cantidad: "" },
      { numeroParte: "TO-4300", ano: "69-84", cilindros: "6 CYL", aplicacion: "F4300CC(4.3L)", usTool: "EPK-069B", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "SATURN",
    items: [
      { numeroParte: "SA-1900", ano: "91-2001", cilindros: "4 CYL", aplicacion: "L4, 1.9 (116 CID )", usTool: "", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "PORSCHE",
    items: [
      { numeroParte: "PO-1983", ano: "80-82", cilindros: "", aplicacion: "H4,1983 (2.0)", usTool: "", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "PO-1565", ano: "81-95", cilindros: "", aplicacion: "L4,1.4 (85CID) ,1565 (1.6) 1647", usTool: "", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "PONTIAC",
    items: [
      { numeroParte: "PO-85", ano: "81-87", cilindros: "4 CYL", aplicacion: "85(1.4L),98(1.6L)", usTool: "EPK-065B", pioneer: "PE-147-R", locacion: "", cantidad: "" },
      { numeroParte: "GM-110", ano: "82-85", cilindros: "4 CYL", aplicacion: "110(1.8L),121(20L),BP,I, 112J,0,G", usTool: "EPK-096B", pioneer: "PE-173-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-121", ano: "85-91", cilindros: "4 CYL", aplicacion: "121(2,0)B,P,I", usTool: "EPK-095B", pioneer: "PE-183-BR", locacion: "", cantidad: "" },
      { numeroParte: "PO-122", ano: "87-92", cilindros: "4 CYL", aplicacion: "122(2.0L),OCH BRAZIL", usTool: "EPK-131B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "GM-173", ano: "80-92", cilindros: "6 CYL", aplicacion: "173(2,8L)", usTool: "EPK-075B", pioneer: "PE-165-BRa", locacion: "", cantidad: "" },
      { numeroParte: "GM-191", ano: "89-96", cilindros: "6 CYL", aplicacion: "191(3.1)", usTool: "EPK-128B", pioneer: "PE-276-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-204", ano: "91-93", cilindros: "6 CYL", aplicacion: "204(3.3)", usTool: "EPK-123B", pioneer: "PE-244-BR", locacion: "", cantidad: "" },
      { numeroParte: "PO-229", ano: "75-85", cilindros: "6 CYL", aplicacion: "200(3.3),229(3.8)", usTool: "EPK-087B", pioneer: "PE-169-BR", locacion: "", cantidad: "" },
      { numeroParte: "PO-231", ano: "76-95", cilindros: "6 CYL", aplicacion: "181,196,231(3.8I5,252(4.1L)", usTool: "EPK-053B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "PO-231/3", ano: "95-97", cilindros: "6 CYL", aplicacion: "231(3.8)", usTool: "EPK-151B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "PO-250", ano: "62-86", cilindros: "6 CYL", aplicacion: "230(3.8),250(4.1)", usTool: "EPK-007B", pioneer: "PE-104-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350D", ano: "64-92", cilindros: "8 CYL", aplicacion: "350(5.7) R,N, DIESEL", usTool: "EPK-025B", pioneer: "PE-124-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350", ano: "68-85", cilindros: "8 CYL", aplicacion: "265,267,283,302,305,307,327,350(5.7)", usTool: "EPK-008B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/2", ano: "86-98", cilindros: "8 CYL", aplicacion: "267(4.45,283,302,305,(5.0),307,350l(5.7)", usTool: "EPK-100B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/3", ano: "92-96", cilindros: "8 CYL", aplicacion: "305(5.0),307,350L(5.7) VIN CODE 7", usTool: "EPK-158B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-403", ano: "77-79", cilindros: "8 CYL", aplicacion: "403(6.6)", usTool: "EPK-076B", pioneer: "PE-124-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "OLDSMOBILE",
    items: [
      { numeroParte: "GM-110", ano: "82-85", cilindros: "4 CYL", aplicacion: "110(1.8L),121(2.0L)B,P,l,112J,O,G", usTool: "EPK-096B", pioneer: "PE-173-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-121", ano: "85-91", cilindros: "4 CYL", aplicacion: "121(2.0)B.P.I", usTool: "EPK-095B", pioneer: "PE-183-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-151", ano: "78-85", cilindros: "4 CYL", aplicacion: "151,(2.5L),R ENGINE", usTool: "EPK-120B", pioneer: "PE-163-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-151/2", ano: "86-93", cilindros: "4 CYL", aplicacion: "151(2.5L),R ENGINE", usTool: "EPK-074B", pioneer: "PE-163-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-173", ano: "80-92", cilindros: "6 CYL", aplicacion: "173(2.8L)", usTool: "EPK-075B", pioneer: "PE-165-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-181", ano: "75-95", cilindros: "6 CYL", aplicacion: "181(3.0),196,231(3.8L),252(4.1L)", usTool: "EPK-053B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-191", ano: "88-96", cilindros: "6 CYL", aplicacion: "191(3.1L)", usTool: "EPK-123B", pioneer: "PE-276-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-204", ano: "91-93", cilindros: "6 CYL", aplicacion: "204(3.3)", usTool: "EPK-123B", pioneer: "PE-244-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-231", ano: "85-95", cilindros: "6 CYL", aplicacion: "231(3.8),252(4.1)", usTool: "EPK-119B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-231/3", ano: "95-97", cilindros: "6 CYL", aplicacion: "231(3.8)", usTool: "EPK-151B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-250", ano: "62-86", cilindros: "6 CYL", aplicacion: "250(4.1)", usTool: "EPK-007B", pioneer: "PE-104-BR", locacion: "", cantidad: "" },
      { numeroParte: "OL-260", ano: "75-82", cilindros: "8 CYL", aplicacion: "260(4.3)", usTool: "EPK-058B", pioneer: "PE-166-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350D", ano: "64-92", cilindros: "8 CYL", aplicacion: "350 (5.5)R,N, DIESEL", usTool: "EPK-025B", pioneer: "PE-124-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350", ano: "68-85", cilindros: "8 CYL", aplicacion: "265,267.283,302,305,307,327,350(5 7)", usTool: "EPK-O08B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/2", ano: "86-98", cilindros: "8 CYL", aplicacion: "267(4.4J,283,302,305, (5.0),307,350L (5 7)", usTool: "EPK-100B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-350/3", ano: "92-96", cilindros: "8 CYL", aplicacion: "305(5.0),307,350L(5.7) VIN CODE7", usTool: "EPK-158B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "GM-403", ano: "77-79", cilindros: "8 CYL", aplicacion: "403(66)", usTool: "EPK-076B", pioneer: "PE-124-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "NISSAN-DATSUN",
    items: [
      { numeroParte: "NI-1288", ano: "70-82", cilindros: "4 CYL", aplicacion: "1171CCA-12,1288CC(1.3)A-13,1397CC(1.4)A-14, 1488CC(1.5)A-15", usTool: "EPK-033B", pioneer: "PE-130-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-1488", ano: "79-90", cilindros: "4 CYL", aplicacion: "1488CC(1.5L)E-15,1597CC(1.6L)E-16", usTool: "EPK-114B", pioneer: "PE-130-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-1952", ano: "81-96", cilindros: "4 CYL", aplicacion: "1952CC (2.0) L-20B", usTool: "EPK-034B", pioneer: "PE-131-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-1597", ano: "82-92", cilindros: "4 CYL", aplicacion: "1597CC,GA161,GA16DE,CA16DE,1974 (2.0) CA20E, CA20S", usTool: "EPK-043B", pioneer: "PE-191-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-2187", ano: "81-96", cilindros: "4 CYL", aplicacion: "1952CC(2.0L)220S,2187CC(2.2L)Z22,Z22E,2389CC(2.4) Z24.2241 .A24E-SOHC.KA24DE", usTool: "EPK-042B", pioneer: "PE-131-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-2565", ano: "69-83", cilindros: "6 CYL", aplicacion: "2393CC(2.4L)L-24,L-24-E,2564(2.6L),L-26,2753CC(2.8)L-28,L28E", usTool: "EPK-033B", pioneer: "PE-132-BR", locacion: "", cantidad: "" },
      { numeroParte: "NI-2960", ano: "84-95", cilindros: "6 CYL", aplicacion: "2960CC(3.0L)VG301 ,VG30E,VG30ET", usTool: "EPK-141B", pioneer: "PE-230-B", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "MITSUBISHI",
    items: [
      { numeroParte: "MI-1468", ano: "85-92", cilindros: "4 CYL", aplicacion: "1468CC(1.5L)G4AJ,G15B", usTool: "EPK-104B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "MI-1795", ano: "83-89", cilindros: "4 CYL", aplicacion: "1795CC(1.8L)G62B,1997CC(2.0)G63B", usTool: "EPK-137B", pioneer: "PE-226-R", locacion: "", cantidad: "" },
      { numeroParte: "MI-2555", ano: "83-92", cilindros: "4 CYL", aplicacion: "2555CC(2.6L)G672", usTool: "EPK-138B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "MI-2972", ano: "88-96", cilindros: "6 CYL", aplicacion: "2972CC(3.0)G672", usTool: "EPK-127B", pioneer: "PE-254-R", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "MAZDA",
    items: [
      { numeroParte: "MA-1272", ano: "76-80", cilindros: "4 CYL", aplicacion: "1272CC(1.3L),1415CC(1.4L)", usTool: "EPK-112B", pioneer: "PE-190-R", locacion: "", cantidad: "" },
      { numeroParte: "MA-1400", ano: "72-81", cilindros: "4 CYL", aplicacion: "1300CC(1.3),1400CC(1.4),1800CC(1.8)", usTool: "EPK-041B", pioneer: "PE-150-BR", locacion: "", cantidad: "" },
      { numeroParte: "MA-1597", ano: "86-92", cilindros: "4 CYL", aplicacion: "1597CC(1.6)B6,B6E", usTool: "EPK-146B", pioneer: "PE-222-R", locacion: "", cantidad: "" },
      { numeroParte: "MA-1839", ano: "90-00", cilindros: "4 CYL", aplicacion: "1839CC(1.8L)BPSOHC,BPDOHC", usTool: "EPK-144B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "MA-1970", ano: "78-84", cilindros: "4 CYL", aplicacion: "1970CC(2.0)", usTool: "EPK-113B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "MA-1998", ano: "83-96", cilindros: "4 CYL", aplicacion: "1998CC(2.0L)FE,FEHI,2184CC(2.2)F2 8Y12V", usTool: "EPK-157B", pioneer: "PE-224-R", locacion: "", cantidad: "" },
      { numeroParte: "MA-2555", ano: "87-88", cilindros: "4 CYL", aplicacion: "2555CC(2.6)G54B", usTool: "EPK-138B", pioneer: "PE-216-R", locacion: "", cantidad: "" },
      { numeroParte: "MA-2954", ano: "89-96", cilindros: "6 CYL", aplicacion: "2954CC(3.0L)JE,JE27,JE48", usTool: "EPK-145B", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "JEEP",
    items: [
      { numeroParte: "JP-134", ano: "41-73", cilindros: "4 CYL", aplicacion: "134 (2.2)", usTool: "EPK-104B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "JP-151", ano: "80-83", cilindros: "4 CYL", aplicacion: "151 (2.5 ), PONTIAC ENGINE", usTool: "EPK-140B", pioneer: "PE-218-R", locacion: "", cantidad: "" },
      { numeroParte: "JP-225", ano: "66-71", cilindros: "6 CYL", aplicacion: "225 (3.7)", usTool: "EPK-139B", pioneer: "PE-277-BR", locacion: "", cantidad: "" },
      { numeroParte: "JP-230", ano: "62-68", cilindros: "6 CYL", aplicacion: "230 (3.8 ) OHC", usTool: "EPK-103B", pioneer: "PE-263-BR", locacion: "", cantidad: "" },
      { numeroParte: "JP-232", ano: "56-93", cilindros: "6 CYL", aplicacion: "196,199,232,258", usTool: "", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "JP-242", ano: "87-95", cilindros: "6 CYL", aplicacion: "242 (4.0)", usTool: "", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "JP-360", ano: "66-91", cilindros: "8 CYL", aplicacion: "290,304,343,360,390", usTool: "", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "ISUZU",
    items: [
      { numeroParte: "IS-1471", ano: "85-92", cilindros: "4 CYL", aplicacion: "1471CC (1.5LJ4XC!, 4XCIT", usTool: "EPK-104B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "IS-1949", ano: "81-87", cilindros: "4 CYL", aplicacion: "1800CC(1.8L)G18OZ, 1949CC (1.9L)G200Z", usTool: "EPK-140B", pioneer: "PE-218-R", locacion: "", cantidad: "" },
      { numeroParte: "IS-2254", ano: "86-95", cilindros: "4 CYL", aplicacion: "2254CC (2.3L),4ZD1,OHC4", usTool: "EPK-139B", pioneer: "PE-277-BR", locacion: "", cantidad: "" },
      { numeroParte: "IS-2559", ano: "88-95", cilindros: "4 CYL", aplicacion: "2559CC (2.6L), 4ZE1", usTool: "EPK-103B", pioneer: "PE-263-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "INFINITY",
    items: [
      { numeroParte: "IN-1998", ano: "91-01", cilindros: "4 CYL", aplicacion: "1998CC (2.0) SR20DE G20", usTool: "EPK-104B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "IN-2960", ano: "93-96", cilindros: "V6", aplicacion: "2960CC (3.0) VG30DE J30", usTool: "", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "IN-2960/2", ano: "90-92", cilindros: "V6", aplicacion: "2960CC (3.0) VG30E M30", usTool: "", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "IN-4494", ano: "90-96", cilindros: "V8", aplicacion: "4494CC (4.5) VH45DE Q45", usTool: "", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "HYUNDAI",
    items: [
      { numeroParte: "HY-1468", ano: "85-92", cilindros: "4 CYL", aplicacion: "1468CC(1.5L)G4AJ, G4GJ", usTool: "EPK-104B", pioneer: "PE-214-R", locacion: "", cantidad: "" },
      { numeroParte: "HY-2350", ano: "89-91", cilindros: "4 CYL", aplicacion: "2350CC (2.4L)G64B, G4CS", usTool: "EPK-137B", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "HONDA",
    items: [
      { numeroParte: "HO-1488", ano: "83-95", cilindros: "4 CYL", aplicacion: "1493C(1.5L)D15B1.1590CC(1.6L)D16A6", usTool: "EPK-110B", pioneer: "PE-189-8R", locacion: "", cantidad: "" },
      { numeroParte: "HO-1493", ano: "33-95", cilindros: "4 CYL", aplicacion: "1829C(1.8L),1958CC(2.0L)A20A11B20A3,B20A5", usTool: "EPK-110B", pioneer: "PE-189-BR", locacion: "", cantidad: "" },
      { numeroParte: "HO-1829", ano: "75-87", cilindros: "4 CYL", aplicacion: "1488C(1.5L)ED3,ED4,EM11599CC(1.6)EF1,1751CC(1.8)", usTool: "EPK-042B", pioneer: "PE-153-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "GMC TRUCK",
    items: [
      { numeroParte: "GMT-121", ano: "85-89", cilindros: "4 CYL", aplicacion: "121 (2.0)", usTool: "EPK-095B", pioneer: "PE-183-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-200", ano: "75-85", cilindros: "V6", aplicacion: "200 (3 3) 229 (3.8)", usTool: "EPK-087B", pioneer: "PE-169-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-262", ano: "85-93", cilindros: "6 CYL", aplicacion: "262N, 2 (4.3)", usTool: "EPK-099B", pioneer: "PE-185-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-305", ano: "60-77", cilindros: "6 CYL", aplicacion: "305 (5.0). 351.401M.478", usTool: "EPK-022B", pioneer: "PE-121-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-381D", ano: "85-95", cilindros: "8 CYL", aplicacion: "381 (6.2) DIESEL. 365 (6.5) DIESEL", usTool: "EPK-098B", pioneer: "PE-180-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-454", ano: "70-97", cilindros: "8 CYL", aplicacion: "427 (7.0). 454 (7.4)", usTool: "EPK-C10B", pioneer: "PE-102-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "GEO",
    items: [
      { numeroParte: "GMT-121", ano: "85-89", cilindros: "4 CYL", aplicacion: "121 (2.0)", usTool: "EPK-095B", pioneer: "PE-183-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-200", ano: "75-85", cilindros: "V6", aplicacion: "200 (3 3) 229 (3.8)", usTool: "EPK-087B", pioneer: "PE-169-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-262", ano: "85-93", cilindros: "6 CYL", aplicacion: "262N, 2 (4.3)", usTool: "EPK-099B", pioneer: "PE-185-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-305", ano: "60-77", cilindros: "6 CYL", aplicacion: "305 (5.0). 351.401M.478", usTool: "EPK-022B", pioneer: "PE-121-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-381D", ano: "85-95", cilindros: "8 CYL", aplicacion: "381 (6.2) DIESEL. 365 (6.5) DIESEL", usTool: "EPK-098B", pioneer: "PE-180-BR", locacion: "", cantidad: "" },
      { numeroParte: "GMT-454", ano: "70-97", cilindros: "8 CYL", aplicacion: "427 (7.0). 454 (7.4)", usTool: "EPK-C10B", pioneer: "PE-102-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "FORD",
    items: [
      { numeroParte: "FO-98", ano: "81-96", cilindros: "4 CYL", aplicacion: "98 (1.6L) ESCORT, 116(1.9)", usTool: "EPK-107B", pioneer: "PE-187-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-98/2", ano: "78-85", cilindros: "4 CYL", aplicacion: "98 (1.6)FIESTA, 98(1600cc)OHC", usTool: "EPK-037B", pioneer: "PE-126-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-110", ano: "72-83", cilindros: "4 CYL", aplicacion: "110(1.8L) TRUCK, 121(2.0L) COURIER", usTool: "EPK-041B", pioneer: "PE-150-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-112", ano: "71-74", cilindros: "4 CYL", aplicacion: "122 (2.0L)", usTool: "EPK-038B", pioneer: "PE-127-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-122/2", ano: "71-74", cilindros: "4 CYL", aplicacion: "122 (2.0L) TRUCK", usTool: "EPK-039B", pioneer: "PE-128-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-140", ano: "74-94", cilindros: "4 CYL", aplicacion: "140 (2.3L)OCH, EXC, HSC", usTool: "EPK-039B", pioneer: "PE-128-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-153", ano: "86-94", cilindros: "4 CYL", aplicacion: "153HSC (2.5)", usTool: "EPK-108B", pioneer: "PE-246-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-155", ano: "95-98", cilindros: "4 CYL", aplicacion: "155 (2.5L)", usTool: "EPK-150B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-171", ano: "74-79", cilindros: "6 CYL", aplicacion: "171 (2.8L)", usTool: "EPK-040B", pioneer: "PE-129-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-179", ano: "86-90", cilindros: "6 CYL", aplicacion: "179 (2.9L)", usTool: "EPK-109B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-182", ano: "86-98", cilindros: "6 CYL", aplicacion: "180, 182 (3.02L)", usTool: "EPK-118B", pioneer: "PE-252-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-183", ano: "90-92", cilindros: "6 CYL", aplicacion: "183 (3.0L)", usTool: "EPK-147B", pioneer: "PE-252-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-200", ano: "61-84", cilindros: "6 CYL", aplicacion: "144 (2.4),170,200(3.3)>250(4.1)w/1-1/4?,Block", usTool: "EPK-014B", pioneer: "PE-105-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-232", ano: "81-99", cilindros: "6 CYL", aplicacion: "232 (3.8), 256 (4.2) Pick up, Van", usTool: "EPK-094B", pioneer: "PE-177-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-240", ano: "65-96", cilindros: "6 CYL", aplicacion: "240(3.9L), 300 (4.9L)", usTool: "EPK-016B", pioneer: "PE-107-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-244", ano: "91-96", cilindros: "6 CYL", aplicacion: "244 (4.0)", usTool: "EPK-134B", pioneer: "PE-278-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-244/2", ano: "97-99", cilindros: "6 CYL", aplicacion: "244(4.0L)", usTool: "EPK-148B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-262", ano: "54-66", cilindros: "6 CYL", aplicacion: "215 (3.5L), 233, 262-TRUCK", usTool: "EPK-015B", pioneer: "PE-106-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-281", ano: "91-96", cilindros: "8 CYL", aplicacion: "281 (4.6L)", usTool: "EPK-122B", pioneer: "PE-280-R", locacion: "", cantidad: "" },
      { numeroParte: "FO-281/2", ano: "96-99", cilindros: "8 CYL", aplicacion: "281 (4.6L)", usTool: "EPK-149B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-292", ano: "55-66", cilindros: "8 CYL", aplicacion: "239, 272, 292 (4.8L),3.12", usTool: "EPK-020B", pioneer: "PE-111-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-300", ano: "87-90", cilindros: "8 CYL", aplicacion: "300 (4.9L)", usTool: "EPK-117B", pioneer: "PE-107-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-302", ano: "62-98", cilindros: "8 CYL", aplicacion: "221,225(3.7L),255,260,289,302(5.0L,351W(5)", usTool: "EPK-017B", pioneer: "PE-2108-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-351", ano: "70-82", cilindros: "8 CYL", aplicacion: "351C,M(5.8L),400", usTool: "EPK-018B", pioneer: "PE-109-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-360", ano: "58-78", cilindros: "8 CYL", aplicacion: "330,332,352,359,360,361,389,390,406,427,428 EPK-019B", usTool: "EPK-019B", pioneer: "PE-110-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-421", ano: "80-92", cilindros: "8 CYL", aplicacion: "421 (6.9L) NAVISTAR-EARLY MODEL", usTool: "EPK-097SS", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-445", ano: "88-92", cilindros: "8 CYL", aplicacion: "445 (7.3L) NAVISTAR LATE MODEL", usTool: "EPK-136SS", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-460", ano: "68-92", cilindros: "8 CYL", aplicacion: "370 (6.1L),429,430,(7.OL),460(7.5L),462", usTool: "EPK-021B", pioneer: "PE-125-BR", locacion: "", cantidad: "" },
      { numeroParte: "FO-474", ano: "86-91", cilindros: "8 CYL", aplicacion: "474(7.8L) DIESEL", usTool: "EPK-121SS", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "FO-477", ano: "58-81", cilindros: "8 CYL", aplicacion: "401 (6.6L), 475,477 (7.8L), 534", usTool: "EPK-027B", pioneer: "PE-168-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "CHRYSLER",
    items: [
      { numeroParte: "CRY-98", ano: "71-86", cilindros: "4 CYL", aplicacion: "98(1.6)", usTool: "EPK-031B", pioneer: "PE-148-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-105", ano: "81-86", cilindros: "4 CYL", aplicacion: "108 (1-7L)", usTool: "EPK-091B", pioneer: "PE-176-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-122", ano: "74-82", cilindros: "4 CYL", aplicacion: "122 (2.0)", usTool: "EPK-032B", pioneer: "PE-149-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-135", ano: "81-96", cilindros: "4 CYL", aplicacion: "135 (2.2L), 153 (2.5L)", usTool: "EPK-088B", pioneer: "PE-176-8R", locacion: "", cantidad: "" },
      { numeroParte: "CRY-156", ano: "81-92", cilindros: "4 CYL", aplicacion: "156(2.6L)", usTool: "EPK-089B", pioneer: "PE-186-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-181", ano: "87-92", cilindros: "6 CYL", aplicacion: "181, 182(3.0L)", usTool: "EPK-127B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CRY-181/2", ano: "92-96", cilindros: "4 CYL", aplicacion: "181,182(3.0L)", usTool: "EPK-155B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CRY-201", ano: "90-96", cilindros: "6 CYL", aplicacion: "201 (3.3L)", usTool: "EPK-105B", pioneer: "PE-112-8R", locacion: "", cantidad: "" },
      { numeroParte: "CRY-215", ano: "91-94", cilindros: "6 CYL", aplicacion: "215(3.5L)", usTool: "EPK-124B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CRY-215/2", ano: "95-98", cilindros: "6 CYL", aplicacion: "215(3.5L)", usTool: "EPK-125B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CRY-225", ano: "60-84", cilindros: "6 CYL", aplicacion: "170, 196 (3.2L), 255 (3.7)", usTool: "EPK-013B", pioneer: "PE-112-8R", locacion: "", cantidad: "" },
      { numeroParte: "CRY-230", ano: "34-60", cilindros: "6 CYL", aplicacion: "230(3.8)", usTool: "EPK-061B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CRY-239", ano: "87-96", cilindros: "6 CYL", aplicacion: "239(3.9L)", usTool: "EPK-106B", pioneer: "PE-258-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-242", ano: "87-95", cilindros: "6 CYL", aplicacion: "242 (4.0L)", usTool: "EPK-126B", pioneer: "PE-256-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-360", ano: "95-96", cilindros: "8 CYL", aplicacion: "273, 318, (5.2L), 340, 360 (5.9)", usTool: "EPK-011B", pioneer: "PE-113-BR", locacion: "", cantidad: "" },
      { numeroParte: "CRY-440", ano: "59-78", cilindros: "8 CYL", aplicacion: "361, 383, 400 (6.6L), 413, 426(7.0), 440(7.2)", usTool: "EPK-012B", pioneer: "PE-114-8R", locacion: "", cantidad: "" },
      { numeroParte: "CRY-1600", ano: "78-83", cilindros: "4 CYL", aplicacion: "1600 CC (1.6) Audi", usTool: "EPK-028B", pioneer: "PE-144-8R", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "CHEVROLET",
    items: [
      { numeroParte: "CH-1800", ano: "72", cilindros: "4 CYL", aplicacion: "1800CC (LUV SERIES-TYPE 1)", usTool: "EPK-029B", pioneer: "PE-145-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-1800/2", ano: "73-75", cilindros: "4 CYL", aplicacion: "1800C (LUV SERIES-TYPE 2-4)", usTool: "EPK-066B", pioneer: "PE-145-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-1800/3", ano: "76-83", cilindros: "4 CYL", aplicacion: "1800CC (LUV SERIES-TYPE 5-12)", usTool: "EPK-090B", pioneer: "PE-146-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-92", ano: "85-92", cilindros: "4 CYL", aplicacion: "92 (1.5)", usTool: "EPK-104B", pioneer: "PE-214-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-98", ano: "76-88", cilindros: "4 CYL", aplicacion: "85(1.4), 98(1.6)", usTool: "EPK-065B", pioneer: "PE-147-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-134", ano: "96-97", cilindros: "4 CYL", aplicacion: "134 (2.2)", usTool: "EPK-152B", pioneer: "PE-240-R", locacion: "", cantidad: "" },
      { numeroParte: "CH-134/2", ano: "98-99", cilindros: "4 CYL", aplicacion: "134 (2.2)", usTool: "EPK-153B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CH-207", ano: "92-95", cilindros: "6 CYL", aplicacion: "207 (3.4)", usTool: "EPK-154B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CH-216", ano: "35-52", cilindros: "6 CYL", aplicacion: "216 (3.5)", usTool: "EPK-060B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CH-229", ano: "78-85", cilindros: "6 CYL", aplicacion: "200 (3.3L), 229(3.8L), 262(4.3L)? 85 ONLY", usTool: "EPK-087B", pioneer: "PE-169-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-231", ano: "76-85", cilindros: "6 CYL", aplicacion: "181 (3.0L), 196, 231 (3.8L), 252(4.1 L)", usTool: "EPK-053B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-231/2", ano: "85-95", cilindros: "6 CYL", aplicacion: "231 (3.8), 252 (4.1)", usTool: "EPK-119B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-235", ano: "50-62", cilindros: "6 CYL", aplicacion: "PP", usTool: "EPK-006B", pioneer: "PE-103-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-250", ano: "62-86", cilindros: "6 CYL", aplicacion: "153, 194, 230, 250 (4.1L) 292 (4.8L)", usTool: "EPK-007B", pioneer: "E-104-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-262", ano: "85-98", cilindros: "6 CYL", aplicacion: "262 (4.3)", usTool: "EPK-099B", pioneer: "PE-185-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-301", ano: "80-81", cilindros: "8 CYL", aplicacion: "265 (4.3), 301 (4.9)", usTool: "EPK-064B", pioneer: "PE-100-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-427", ano: "91-95", cilindros: "8 CYL", aplicacion: "366 (6.0), 427 (7.0), 454 (7.4)", usTool: "EPK-135B", pioneer: "PE-102-BR", locacion: "", cantidad: "" },
      { numeroParte: "CH-454", ano: "65-90", cilindros: "8 CYL", aplicacion: "366 (6.0), 396,400w4BC, 402 (6.6) 427,427,454 (7.4)", usTool: "EPK-010B", pioneer: "PE-102-BR", locacion: "Oil Gallery, Camshaft, Block", cantidad: "A/R, 1, 7" },
      { numeroParte: "CH-454/2", ano: "70-79", cilindros: "8 CYL", aplicacion: "400W/2BC (6.6L)", usTool: "EPK-009B", pioneer: "", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "CADILLAC",
    items: [
      { numeroParte: "CA-110", ano: "82-85", cilindros: "4 CYL", aplicacion: "110(1.8). 112G (1.8),121 (2.0)", usTool: "EPK-096B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CA-121", ano: "85-91", cilindros: "4 CYL", aplicacion: "121 (2.0)", usTool: "EPK-065B", pioneer: "PE183-P", locacion: "", cantidad: "" },
      { numeroParte: "CA-173", ano: "80-92", cilindros: "6 CYL", aplicacion: "173(2.8)", usTool: "EPK-075B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "CA-252", ano: "80-93", cilindros: "6 CYL", aplicacion: "252(4.1)", usTool: "EPK-053B", pioneer: "PE-137-BR", locacion: "", cantidad: "" },
      { numeroParte: "CA-252/2", ano: "82-88", cilindros: "8 CYL", aplicacion: "252 (4.1) ALUM", usTool: "EPK-133", pioneer: "PE-184-R", locacion: "", cantidad: "" },
      { numeroParte: "CA-273", ano: "88-92", cilindros: "6 CYL", aplicacion: "273 (4.5)", usTool: "EPK-133", pioneer: "PE-184-R", locacion: "", cantidad: "" },
      { numeroParte: "CA-300", ano: "91-93", cilindros: "8 CYL", aplicacion: "300(4.9) A298", usTool: "EPK-035B", pioneer: "PE-132-BR", locacion: "", cantidad: "" },
      { numeroParte: "CA-350", ano: "64-92", cilindros: "8 CYL", aplicacion: "307 (5.0). 350B.N.R (5.7)", usTool: "EPK-025B", pioneer: "PE-124-BR", locacion: "", cantidad: "" },
      { numeroParte: "CA-425", ano: "64-84", cilindros: "8 CYL", aplicacion: "368 (6.0). 425(7.0).429,472,500", usTool: "EPK-005B", pioneer: "PE-120-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "AUSTIN",
    items: [
      { numeroParte: "AU-1798", ano: "74-84", cilindros: "4 CYL", aplicacion: "1471 CC FOX, 1588CC FOX.", usTool: "EPK-067B", pioneer: "PS-143-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "AMERICAN MOTORS",
    items: [
      { numeroParte: "AM-121", ano: "77-79", cilindros: "4 CYL", aplicacion: "121(2.0)", usTool: "PK-028B", pioneer: "PE-144-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-134", ano: "41-73", cilindros: "4 CYL", aplicacion: "134 JEEP (2.2)", usTool: "EPK-063B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "AM-150", ano: "83-96", cilindros: "4 CYL", aplicacion: "150 OHV (2.4)", usTool: "EPK-129B", pioneer: "PE-181-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-151", ano: "80-83", cilindros: "4 CYL", aplicacion: "151 PONTIAC(2.5)", usTool: "EPK-074B", pioneer: "PE-163-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-173", ano: "84-86", cilindros: "6 CYL", aplicacion: "173 (2.8)", usTool: "EPK-075B", pioneer: "PE-165-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-232", ano: "56-93", cilindros: "6 CYL", aplicacion: "196 (3.2), 199, 232 (3.8), 258 (4.2)", usTool: "EPK-001B", pioneer: "PE-116-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-242", ano: "87-95", cilindros: "6 CYL", aplicacion: "242 (4.0j)", usTool: "EPK-126B", pioneer: "PE-256-BR", locacion: "", cantidad: "" },
      { numeroParte: "AM-250", ano: "57-66", cilindros: "6 CYL", aplicacion: "250 (4.1), 287, 327", usTool: "EPK-059B", pioneer: "", locacion: "", cantidad: "" },
      { numeroParte: "AM-360", ano: "66-91", cilindros: "8 CYL", aplicacion: "290, 304 (5.0), 343, 360 (5.9), 390 (6.4), 401", usTool: "EPK-002B", pioneer: "PE-117-BR", locacion: "", cantidad: "" }
    ]
  },
  {
    marca: "VOLVO",
    items: [
      { numeroParte: "VO-1780", ano: "62-75", cilindros: "4 CYL", aplicacion: "1780CC(1.8)B18A,B18B,B18D,1990CC(2.0)B20A, EPK-047B B20B,B20E,B20F", usTool: "EPK-047B", pioneer: "PE-157-BR", locacion: "", cantidad: "" },
      { numeroParte: "VO-1782", ano: "65-90", cilindros: "6 CYL", aplicacion: "2127CC(2.1),2316CC(2.3)B21A,2979CC(3.0) EPK-048B B30A,B30E,B30F", usTool: "EPK-048B", pioneer: "PE-158-BR", locacion: "", cantidad: "" }
    ]
  }
];

const SetsCatalog = () => {
  const { items, addItem, updateQuantity } = useCart();

  const getItemQuantity = (id: string) => {
    const item = items.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item: SetItem, marca: string) => {
    addItem({
      id: item.numeroParte,
      name: `${marca} - ${item.aplicacion}`,
      type: 'set',
      details: `${item.ano} | ${item.cilindros} | ${item.cantidad}`
    });
    toast.success("Agregado al carrito", {
      description: `${item.numeroParte} - ${item.aplicacion}`
    });
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
    <section id="catalogo-sets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header con imagen y descripción */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Catálogo de <span className="text-primary">Sets de Sellos</span>
            </h2>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src={freezePlugSetsImage} 
              alt="Sets de tapones de congelación" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Acerca de Nuestros Sets</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ofrecemos una amplia gama de sets completos de tapones de congelación (freeze plugs) 
              para las marcas y modelos de motores más populares. Cada set está cuidadosamente 
              seleccionado para incluir todas las piezas necesarias para su aplicación específica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestros sets son compatibles con las referencias de US Tool y Pioneer, garantizando 
              calidad y precisión en cada instalación. Todos los productos están fabricados con 
              materiales de primera calidad: acero, latón y aluminio según la aplicación.
            </p>
          </div>
        </div>

        {/* Listados por marca */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Listados por <span className="text-accent">Marca de Auto</span>
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {catalogData.map((brand) => (
              <AccordionItem 
                key={brand.marca} 
                value={brand.marca}
                className="bg-card rounded-lg shadow-md border-2 border-border overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 text-xl font-bold">
                  {brand.marca}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-bold">Número de Parte</TableHead>
                          <TableHead className="font-bold">Año</TableHead>
                          <TableHead className="font-bold">Cilindros</TableHead>
                          <TableHead className="font-bold">Aplicación</TableHead>
                          <TableHead className="font-bold">US Tool</TableHead>
                          <TableHead className="font-bold">Pioneer</TableHead>
                          <TableHead className="font-bold">Locación</TableHead>
                          <TableHead className="font-bold">Cantidad</TableHead>
                          <TableHead className="font-bold text-center">Seleccionar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {brand.items.map((item, index) => {
                          const quantity = getItemQuantity(item.numeroParte);
                          return (
                            <TableRow key={index} className="hover:bg-muted/30">
                              <TableCell className="font-medium">{item.numeroParte}</TableCell>
                              <TableCell>{item.ano}</TableCell>
                              <TableCell>{item.cilindros}</TableCell>
                              <TableCell>{item.aplicacion}</TableCell>
                              <TableCell>{item.usTool}</TableCell>
                              <TableCell>{item.pioneer}</TableCell>
                              <TableCell>{item.locacion}</TableCell>
                              <TableCell>{item.cantidad}</TableCell>
                              <TableCell>
                                <div className="flex items-center justify-center gap-2">
                                  {quantity === 0 ? (
                                    <Button
                                      size="sm"
                                      variant="racing"
                                      onClick={() => handleAddToCart(item, brand.marca)}
                                    >
                                      <ShoppingCart className="w-4 h-4 mr-1" />
                                      Agregar
                                    </Button>
                                   ) : (
                                     <div className="flex items-center gap-1 bg-muted rounded-md p-1">
                                       <Button
                                         size="icon"
                                         variant="ghost"
                                         className="h-8 w-8"
                                         onClick={() => handleDecrement(item.numeroParte)}
                                       >
                                         <Minus className="w-4 h-4" />
                                       </Button>
                                       <Input
                                         type="number"
                                         min="0"
                                         value={quantity}
                                         onChange={(e) => handleQuantityChange(item.numeroParte, e.target.value)}
                                         className="w-14 text-center font-bold h-8 px-1"
                                       />
                                       <Button
                                         size="icon"
                                         variant="ghost"
                                         className="h-8 w-8"
                                         onClick={() => handleIncrement(item.numeroParte)}
                                       >
                                         <Plus className="w-4 h-4" />
                                       </Button>
                                     </div>
                                   )}
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SetsCatalog;