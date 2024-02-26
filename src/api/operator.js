import axios from "axios";
import { GET_OPERATOR } from "../Constants/Constant";

export const getOperator = async({token})=>{
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include authorization header if needed
        };
        const operatorList = await axios.get( GET_OPERATOR , {headers : headers} )
        return {status :true , data: operatorList.data.data.operators }
    }
    catch(e){
        console.log(e.response.data);
    }
}