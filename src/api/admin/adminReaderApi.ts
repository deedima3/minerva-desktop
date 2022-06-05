import client from "../baseApi";

export default {
    async getAllReader(user : string){
        return client.get("/admin/get-alluser", {
            headers: {
                "Authorization": `Bearer ${user}`
            }
        });
    },

    async getUserBorrowed(user : string){
        return client.get("/admin/get-borrowed", {
            headers: {
                "Authorization": `Bearer ${user}`
            }
        });
    },
}