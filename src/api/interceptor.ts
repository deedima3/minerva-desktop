import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { AdminAuthApi } from './auth/adminAuth';

axios.interceptors.request.use(
    async request => {
        if(
            request.headers!.Authorization
        ){
            const token = localStorage.getItem('user');
            let decodedToken : any = jwt_decode(token!);
            var dateNow = new Date();
            if(decodedToken.exp*1000 < dateNow.getTime()){
                try {
                    await AdminAuthApi.refresh()
                    return request;
                }
                catch(e){
                    await AdminAuthApi.logout()
                    return request;
                }
            }
            return request;
        }
    }
)