function main(test1){
    var ab=test1;
    function abc(test2){
        return ab+test2
    }
    return abc(6);
}
var check = main(6);
console.log(check);