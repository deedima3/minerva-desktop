import client from "../baseApi";

export default {
    async getAllBorrowed(user: string) {
        return (
            await client.get("/admin/all-borrowed", {
                headers: {
                    Authorization: `Bearer ${user}`,
                },
            })
        ).data.data;
    }
}