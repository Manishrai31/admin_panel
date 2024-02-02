import { LOGIN_API } from '../Constants/Constant';
import axios from 'axios';


export const AuthenticateUser = async(payload)=>{
    // console.log(payload);
    try{

        const result = await axios.post(LOGIN_API , {...payload});
        // console.log(result.code);
        if(result.data.status)
        {
            return {...result.data}
        }
        else{
            return {status : false , msg : result.data.msg}
        }
    }
    catch(err){
        console.log(err.response.data.msg);
        return {status : false , msg : err.response.data.msg}
    }
}