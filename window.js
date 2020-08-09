const name="Kuddos";

function add(num1,num2){
    const result=num1+num2;
    console.log("name outside",name);
    function double(num){
        return num*2;
    }

    const  total= double(result);
    return result;

}

console.log("name outside",name);
const sum=add(20,30);
console.log(sum);