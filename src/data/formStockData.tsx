import { FormFieldData } from "../interfaces/formdata.interface";

export const formStockData : {add : FormFieldData[], update : FormFieldData[]} = {
  add: [
    {
      title: "Nomor Buku",
      placeholder: "masukan nomor buku",
      fieldname: "noBuku",
      type: "text",
    },
    {
      title: "Nama Rak",
      placeholder: "masukan nama rak",
      fieldname: "namaRak",
      type: "text",
    },
    {
      title: "Nomor Rak",
      placeholder: "masukan nomor rak",
      fieldname: "noRak",
      type: "text",
    },
    {
      title: "Ketersediaan",
      placeholder: "ada/tidak",
      fieldname: "ada",
      type: "text",
    },
  ],
  update: [
    {
      title: "ID buku",
      placeholder: "",
      fieldname: "idBuku",
      type: "text",
    },
    {
      title: "No Buku",
      placeholder: "",
      fieldname: "noBook",
      type: "text",
    },
    {
      title: "No Rak",
      placeholder: "",
      fieldname: "noRak",
      type: "text",
    },
    {
      title: "Ketersediaan",
      placeholder: "",
      fieldname: "ada",
      type: "text",
    },
  ],
};
