import { CookiesApi } from "../../shared/cookiesApi";
import { LoginProps } from "../../interfaces/auth.interface";
import client from "../baseApi";

export class AdminAuthApi {
    static async login(data : LoginProps) {
        try{
            let request = await client.post("/auth/login", data);
        if(request.status == 200){
            return request.data.token
        }
        }catch(e){
            console.log(e)
        }
    }

    static async logout() {
        CookiesApi.deleteCookie("username");
        localStorage.setItem("user", "");
    }

    static async refresh(){
        try{
            let request = await client.get("/auth/refresh");
            return request.data;
        }
        catch(e){
            console.log(e)
        }
    }
}