
                                                                // ARRAY

let myarr =[10,"hello",true,false];
console.log("arr length: =", myarr.length);

let arr =[10,20,30,40,50];
console.log("arr[2]:", arr[2] );
console.log("index of 30:" , arr.indexOf(30));

arr.push("end");
console.log("push",arr); //adds an element at end of the Array

arr.unshift("start"); //adds an element at begining of the Array
console.log("start",arr);

arr.pop(); //removes last element of the array
console.log("pop",arr);

arr.shift();//removes first element of the array
console.log("shift", arr);

arr.splice(1,2);//arr.splice(start index , number of elements to be spliced)
console.log("splice:",arr);


arr.splice(2,0,42);

console.log("splice:",arr);

arr[0]=456;

console.log("splice:",arr);


                                                                            //OBJECTS
  {
    let obj = {
    firstanme :"John",
    lastname :"Doe",
    age:40,
    canadian:false,
    marks:[20,30,40],
    address:{
        city:"kochi",
        street:"palluruthy",

    }

    }
    console.log("obj:",obj)

    obj.phone ="25468754";
    console.log("obj:",obj);

    let json_str = JSON.stringify(obj); //convert javascript object to json string
    console.log("json_str",json_str);

    json_str.firstanme//notpossible

    let json_str_format=`
    irstanme :"John",
    lastname :"Doe",
    age:40,
    canadian:false,
    marks:[20,30,40],
    address:{
        city:"kochi",
        street:"palluruthy",

    }`


}                                                              
