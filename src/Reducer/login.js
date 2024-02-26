const isLogin = {
    isLogin: false,
    userToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJhODRjOTM2NWQ4OTFhYjYxYTFiZTYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDg4NjY4MzF9.W5tswHRi-rb0FjMgr_4B5kWUhuI1vOqFsZit4vA0Qe8",
    name:""
};
const authentication=(state = isLogin , action)=>{
    switch (action.type){
        case 'LOGIN' :
            
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