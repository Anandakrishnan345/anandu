{
    //destructuring
    let matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log("matrix is:",matrix);
    let [row1,row2,row3]=matrix;
    console.log("row1 is:",row1)
    console.log("row2 is:",row2)
    console.log("row3 is:",row3)

    let [a,b,c]=row1;
    let [d,e,f]=row2;
    let [g,h,i]=row3;

    console.log("a is:",a)
    console.log("b is:",b)
    console.log("c is:",c)
    console.log("d is:",d)
    console.log("e is:",e)
    console.log("f is:",f)
    console.log("g is:",g)
    console.log("h is:",h)
    console.log("i is:",i)
    
}
{
    let obj={
        firstname:"john",
        lastname:"doe",
        age:35,
        address:{
            street:"mystreet",
            city:"mycity",
            pincode:"123456",
        },


    }
    console.log("obj is:",obj)
    let {firstname,lastname,age,address:{street,city,pincode}}=obj;
    console.log("firstname:",firstname);
    console.log("lastname:",lastname);
    console.log("age :",age);
    console.log("street:",street);
    console.log("city:",city);
    console.log("pincode:",pincode);

}

//spread operator
{
    let arr1=[1,2,3,4]
    console.log("arr1 is:",arr1);
    let arr2=[9,8,7,6,5]
    console.log("arr2 is:",arr2);


    let arr3=[...arr1,...arr2]
    console.log("arr3 is:",arr3);

}
{
    //array methods
    let arr= [
        {name:"leo",mark:50,place:"chennai"},
        {name:"harold",mark:45,place:"bombai"},
        {name:"rolex",mark:49,place:"chennai"},
    ];

    // 1-  foreach
    arr.forEach((Element,index) =>{
        console.log("index:",index);
        console.log("element",Element.name)
    })

    // 2-  find
    let findresult=arr.find((Element) =>{
        return Element.name=="leo";
    })
    console.log("findresult",findresult);

    // 3- filter
    let filterresult = arr.filter((Element,index) =>{
    return Element.place =="chennai"        
    })
    console.log("filterres",filterresult);

    // 4- map
    let mapresult = arr.map((Element)=>{
        return Element.name;
    })
    console.log("mapresult is:",mapresult)

    // 5-  reduce
    let totalmark = arr.reduce((total,Element)=>{
        return total + Element.mark
    },0);
    console.log("totalmark:",totalmark)
}

{
    //find sum of squares of a numerical array using foreach
    let arr=[2,3,4,6];  
   let square = arr.map((n)=>{
        return n**2
    })
    console.log("square",square)
    let sum=0;
    let sumsquare = square.forEach((Element) =>{sum+=Element});
    console.log("sumsquare",sum)

}

{
    //find first even number of an array using find
    let arr = [5,7,2,1,4];
    let firsteven = arr.find((Element) =>{
        return Element %2 == 0;

    })
    console.log("firsteven",firsteven)
}
{
    //filter all  even nums
    let arr = [5,7,2,1,4];
    let filtereven = arr.filter((Element) =>{
        return Element %2 == 0;

    })
    console.log("filtereven",filtereven)
}
{
    //double eachelement using map
    let arr=[2,3,4,6];  
    let double = arr.map((n)=>{
         return n*2
     })
     console.log("no double",arr)
     console.log("double",double)
}


{
 let arr = [-4,-5,5,6,2,-8]
 function productpossitive(arr){
    let positivefilter = arr.filter((Element) =>{
        return Element > 0;
    })
    console.log("pos",positivefilter)
    // let product = 0;
    let positiveproduct = positivefilter.reduce((product,n) =>{
       product= product*n;
       return product;
    },1);
    console.log("productpositive",positiveproduct)
 }
 productpossitive(arr)
}