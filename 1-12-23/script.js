{
    //loops
//for loop
//while loops
//do while loop


    for (let i=0;i<10;i++)
    {
        console.log("hello world")
    }
let i =0;
while(i<10){
    console.log("hai");
    i++;
}
let j=11;
do{
    console.log("welcome");
    j++;
}while(j<10)


}


    // for (let i=1;i<=10;i++){
    //     if(i==3){
    //         continue;
    //     }
    //     if(i==7){
    //         break;
    //     }
    // }
    // console.log(i);

    {
        let sum=0;
        for(let i=1;i<=10;i++){sum=sum+i}
            

        
        console.log(sum);
    }

    {
        //product
        let product =1;
        for(let i=1;i<=10;i++){product=product*i}
        console.log("product is:",product);

    }

    {
        //factorial
        let fact=1;
        let num=5;
        for( let i=num;i>0;i--){fact=fact*i}
        console.log("factorial is:",fact)
    }

    {
        //series
        
        // let sum=0;
        
        // for(let i=0;i<=10;i++)
        // {
        //     sum=sum+i;
        //     console.log(sum);
            
        // }
       
        console.log("fibonocci series");
        let sum1=0;
        let limit=10;
        let a =0;
        let b=1;
        let l=0;
        while(l<=limit){
            sum1=sum1+a;
            console.log(sum1);
            a=b;
            b=sum1;
            l++;
        }




        
    }

    {
        //even no. sum
        let sum1=0;
        let sum2=0;
        for(let i =0;i<=10;i++){
            if(i%2==0){
                sum1=sum1+i;
                
            }
            // if(i%2==1){
                else{sum2=sum2+i;}
                
                
            // }

        }
        console.log("evensum",sum1);
        console.log("oddsum",sum2);
    }



    //array sum 2-12-23
    {
     let arr =[50,30,10,40,20];
     let sum=0;
     for(let i=0;i<arr.length;i++)
     {
        sum=sum+arr[i];
     }   
     console.log("arraysum: ",sum);
     

     //average 
     let avg=sum/arr.length;
     console.log("avg: ",avg);


     //find min value of array

     let min = arr[0];
     for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
     }

     console.log("min: ",min)

     // find max value of array


     let max = arr[0];
     for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
     }

     console.log("max: ",max)


    
    }
{
 // find -ve number in an array and convert it into +ve 
 let arr=[5,6,-4,2,8,9]
 let neg=0;
 for(let i=0;i<arr.length;i++){
    if(arr[i]<neg){
        arr[i]=arr[i]*-1;
    }
 }
 console.log("arr :",arr)

 //strig reverse

let str="Hello";
let reverse = '';

for (let i=str.length-1;i>=0;i--){
    reverse=reverse+str[i];

}
    console.log("reverse",reverse);
}
{
// find lowercase letter in array and convert to upper case
let arrletter=['a','B','c','D']
let upcarr=[];
let locarr=[];
 for (let i=0;i<arrletter.length;i++){
    upcarr[i]=arrletter[i].toUpperCase();
    locarr[i]=arrletter[i].toLowerCase();
 }
 console.log("uppercase",upcarr)
 console.log("lowercase",locarr)
}
{
    let strr=''
    let strr2='' //print in viewport
    let i;
    let j;
    for (i=1;i<=10;i++){
        for(j=1;j<=i;j++){
            strr=strr+'*';
            strr2=strr2+'*';
        }
        strr=strr+'\n';
        strr2=strr2+'<br>';
        
    }
    
    console.log(strr)
    document.write(strr2,)
}

{
    //4-12-23
    //functions

    //function definition
    function printhello(){
        console.log("hello world")
        console.log('hai')
    }
    printhello();//functon call

    //named function
    function getAge(){
        return 12;

    }
    let age =getAge();
    console.log("getAge",age);

    //Anonymous function
    let getName=function(){
        console.log("get name function called");
        return "john";
    }
let name=getName();
console.log("Name :",name);


//Arrow function 
let getMarks=()=>{
    console.log("Arrow function called");
    return 70;

}
let mark=getMarks();
console.log("maks :",mark);
}

{
  //redo all the above programs using function 

  // sum of array using function
  function sum(){
    let arr =[50,30,10,40,20];
     let sum=0;
     for(let i=0;i<arr.length;i++)
     {
        sum=sum+arr[i];
     }   
     console.log("arraysum: ",sum);

   
     
  }
  sum()

//find small element in array using function
  function min(){
    let arr =[50,30,10,40,20];
    let min = arr[0];
    for(i=0;i<arr.length;i++){
       if(arr[i]<min){
           min=arr[i];
       }
    }

    console.log("min: ",min)
  }
 min()


//find large element in array using function

let arr =[50,30,10,40,20];
 function max(arr){
    
    let max = arr[0];
    for(i=0;i<arr.length;i++){
       if(arr[i]>max){
           max=arr[i];
       }
    }

    console.log("max: ",max)
 }
 max(arr)

//find fibonocci series using function

 function fibonocci(){
    console.log("fibonocci series");
    let sum1=0;
    let limit=10;
    let a =0;
    let b=1;
    let l=0;
    while(l<=limit){
        sum1=sum1+a;
        console.log(sum1);
        a=b;
        b=sum1;
        l++;
    }
 }
 fibonocci()

 //find factorial using function with parameter 

 function factorial(num){
    let fact=1;
    
    for( let i=num;i>0;i--){fact=fact*i}
    console.log("factorial is:",fact)
 }
 factorial(5)

 //string reverse using function with parameter 

 function message(str){
    
let reverse = '';

for (let i=str.length-1;i>=0;i--){
    reverse=reverse+str[i];

}
    console.log("reverse",reverse);
 }

message('hello')



function star(){
    let todo='using function';
    document.write(todo)
    document.write("<br>")
    
    let strr=''
    let strr2='' //print in viewport
    let i;
    let j;
    for (i=1;i<=10;i++){
        for(j=1;j<=i;j++){
            strr=strr+'*';
            strr2=strr2+'*';
        }
        strr=strr+'\n';
        strr2=strr2+'<br>';
        
    }
    
    console.log(strr)
    document.write(strr2,)
}
star()

}
{
     
    let text='aea'
    let count = 0;  
    for(let i =0;i<text.length;i++){
        if(text[i]=='a'){
            count=1;
            console.log(count)
            

        }
        // rree=[count]
        // console.log(rree)
    }
    // console.log("sum",sum)
}