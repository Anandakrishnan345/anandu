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
            if(i%2==1){
                sum2=sum2+i;
                
            }

        }
        console.log(sum1);
        console.log(sum2);
    }