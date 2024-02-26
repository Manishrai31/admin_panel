import axios from 'axios';
import { GET_PRODUCT } from '../Constants/Constant';

export const getProduct=async ({token})=>{
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include authorization header if needed
        };
        const Product_List = await axios.get( GET_PRODUCT , {headers : headers} )
        return {status :true , data: categoryList.data.data.products }
    }
    catch(e){
        console.log(e.response.data);
        return {status:false}
    }
}