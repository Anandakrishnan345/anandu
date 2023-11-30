
{
    // let num=10;
    let num=25;
    if(num==10){
        console.log("pass")
    }
   
    else if(num==25) {
        console.log("processing")

    }
    else{
        console.log("fail")
    }
}

//preincrement
let a=50
let preincA=++a;
console.log("a after preincrement",preincA);

// postincrement
let b=50;
let postincB=b++;
console.log("postincB",postincB)

//predecremet
let c=50;
let predecC=--c;
console.log("c after preincrement",predecC);

//postdecrement

let d=50;
let postdecD=d--;
console.log("d after postdecrement",postdecD)


{//=== to check both datatype and value are equal

let num1=10;// datatype intger
let num2='10'// datatype string

if(num1==num2){
        console.log("both values are equal")
}

if(num1===num2){
    console.log("both values are equal")
   

}
else{
    console.log("both values are notequal")
}
}




{
    let num3=10;// datatype intger
let num4=10// datatype intger
if(num3===num4){
    console.log("both values are equal")
   

}

}



{
    let day=1;
    switch(day){
        case 1: console.log("MONDAY");
        break;

        case 2: console.log("TUESDAY");
        break;

        case 3: console.log("WEDDAY");
        break;

        case 4: console.log("THURSDAY");
        break;

        case 5: console.log("FRIDAY");
        break;

        case 6: console.log("SATURDAY");
        break;

        case 7: console.log("SUNDAY");
        break;

     
    }
}