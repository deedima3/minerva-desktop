export interface BookDetail {
    ID : number
    Image : string
    Title : string
    JudulSeri : string
    Penerbit : string
    Deskripsi : string
    Id_Jenis : number
    Jenis : JenisBuku[]
    Bahasa : string
    ISBN : string
    Edisi : string
    Ketersediaan : string
    Stock : number
    Subjek : string
    Id_Kategori : number
    Kategori : KategoriBuku[]
}

export interface JenisBuku {
    ID : number
    CreatedAt : string
    UpdatedAt : string
    DeletedAt : string
    NamaJenis : string
}

export interface KategoriBuku {
    ID : number
    CreatedAt : string
    UpdatedAt : string
    DeletedAt : string
    NamaKategori : string
}