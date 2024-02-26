// const value = "Hello what is your name how are you?...";
// console.log(value.includes('whatm'));
const value =[
    {
        name : "Manish",
        lastName :"Rai",
        designation :"Full StacK Developer"
    },
    {
        name : "Harjinder ",
        lastName :"Singh",
        designation :"Server engineer"
    }
]
const singleValue ={
    name : "Harjinder ",
    lastName :"Singh",
    designation :"Server engineer"
}
// console.log(Object.values(value));
// const filteredData = value.filter(Object.values(value).some(
//     (value)=>{
//         // console.log(value);
//         typeof value === 'string' && value.includes("mani");
//     }
// )
// )
// const filteredData = value.filter((item)=>{
//     Object.values(item).some(
//             (val)=>{
//                 // console.log(value);
//                 typeof val === 'string' && val.includes("Mani");
//             }
//         )
// })
console.log( Object.values(singleValue).some(
    (val)=>{
        console.log(val);
       return  typeof val === 'string' && val.includes("engi");
    }
));

