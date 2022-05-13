import client from "../baseApi";

export default {
  async getAllBooks(user: string) {
    return (
      await client.get("/admin/all-book", {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
    ).data.data;
  },

  async createBook(user: string, data: any) {
    return (
      await client.post("/admin/create-book", data, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
    ).data.data;
  },

  async getDetailBook(user: string, id: string) {
    return (
      await client.get(`/admin/detail-book/${id}`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
    ).data.data;
  },

  async getBookStocks(user: string, id: string) {
    return (
        await client.get(`/admin/book-stocks/${id}`, {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          })
    ).data.data
  },

  async restockBook(user: string, data: any) {
    return (await client.post("/admin/restock-book", data, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })).data
  },
};
