const isLogin = {
    isLogin: true,
    userToken:"",
    name:""
};
const authentication=(state = isLogin , action)=>{
    switch (action.type){
        case 'LOGIN' :
            console.log("hello-----");
            console.log(action);
            state={isLogin : true , userToken: action.userToken , name : action.name}
            return state;
        case 'LOGOUT' :
            state= {isLogin : false , userToken: "" , userId : ""}
            return state;
        default :
        return state;
    }
}
export default authentication;