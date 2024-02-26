import axios from 'axios';
import { GET_CATEGORY } from '../Constants/Constant';

export const getCategory=async ({token})=>{
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include authorization header if needed
        };
        const categoryList = await axios.get( GET_CATEGORY , {headers : headers} )
        return {status :true , data: categoryList.data.data.categories }
    }
    catch(e){
        console.log(e.response.data);
    }
}