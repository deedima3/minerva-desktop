import { FormFieldData } from "../interfaces/formdata.interface";

export const formBookUpdate : {left : FormFieldData[], right : FormFieldData[]} = {
  left: [
    {
      title: "Book Title",
      placeholder: "",
      fieldname: "title",
      type: "text",
    },
    {
      title: "Judul Seri",
      placeholder: "",
      fieldname: "judulSeri",
      type: "text",
    },
    {
      title: "Penerbit",
      placeholder: "",
      fieldname: "penerbit",
      type: "text",
    },
    {
      title: "Deskripsi",
      placeholder: "",
      fieldname: "deskripsi",
      type: "textarea",
    },
  ],
  right: [
    {
      title: "Id Jenis",
      fieldname: "idJenis",
      type: "select",
      option : ["Kategori 1", "Kategori 2", "Kategori 3"]
    },
    {
        title : "Bahasa",
        placeholder: "",
        fieldname : "bahasa",
        type : "text",
    },
    {
        title : "ISBN",
        placeholder: "",
        fieldname : "ISBN",
        type : "text",
    },
    {
        title : "Edisi",
        placeholder: "",
        fieldname : "edisi",
        type : "text",
    },
    {
        title : "Subjek",
        placeholder: " ",
        fieldname : "ISBN",
        type : "text",
    },
    {
        title : "Kategori",
        fieldname : "idKaegori",
        type : "select",
        option : ["Kategori 1", "Kategori 2", "Kategori 3"]
    },
  ],
};
