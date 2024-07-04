function display(result){
    console.log(result);
}
function calculation(num1,num2,callback){
    let total = num1+num2;
    callback(total);
}
calculation(10,20,display)