export const login=(payload)=>{
    console.log(payload.name);
    return {type : 'LOGIN' , ...payload}
}
export const logout=()=>{
    return {type : 'LOGOUT'}
}