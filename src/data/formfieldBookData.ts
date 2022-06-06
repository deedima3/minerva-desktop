import { FormFieldData } from "../interfaces/formdata.interface";

export const formfieldBookData : {left : FormFieldData[], right : FormFieldData[]} = {
  left: [
    {
      title: "Book Title",
      placeholder: "Buku yang aku suka",
      fieldname: "title",
      type: "text",
    },
    {
      title: "Judul Seri",
      placeholder: "Episode 2",
      fieldname: "judulSeri",
      type: "text",
    },
    {
      title: "Penerbit",
      placeholder: "Penerbit Buku",
      fieldname: "penerbit",
      type: "text",
    },
    {
      title: "Deskripsi",
      placeholder: "Deskripsi Buku",
      fieldname: "deskripsi",
      type: "textarea",
    },
  ],
  right: [
    {
      title: "Image",
      placeholder: "http://image.png",
      fieldname: "image",
      type: "text",
    },
    {
        title : "Bahasa",
        placeholder: "Bahasa Indonesia",
        fieldname : "bahasa",
        type : "text",
    },
    {
        title : "ISBN",
        placeholder: "9678474564",
        fieldname : "ISBN",
        type : "text",
    },
    {
        title : "Edisi",
        placeholder: "Edisi 2",
        fieldname : "edisi",
        type : "text",
    },
    {
        title : "Subjek",
        placeholder: "Ini isi apa?",
        fieldname : "ISBN",
        type : "text",
    },
  ],
};
