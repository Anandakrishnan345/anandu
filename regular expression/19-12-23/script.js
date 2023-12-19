{
    const str1="cat is white";
    const str2="this month is december"
    const str3="yesterday was monday 1"
    const str4=`north
    south
    east 
    west
    sun rise at east`;

    const regexp1=/a/; //check str1 conatins letter a
    const result1 =regexp1.test(str1);
    console.log("result1",result1) // true

    const regexp2=/A/i; //check str1 conatins letter a ....// i for case insnsitive search
    const result2 =regexp2.test(str1);
    console.log("result2",result2)// true

    const regexp3=/abc/; //check str1 conatins letter abc in this order
    const result3 =regexp3.test(str1);
    console.log("result3",result3) //false

    
    //[]- represents range
    const regexp4=/[crb]a/; //check str1 contains c r b before a
    const result4 =regexp4.test(str1);
    console.log("result4",result4) //true

    const regexp5=/[a-z]a/i; //check str1 conatins a-z before a
    const result5 =regexp5.test(str1);
    console.log("result5",result5) //true


    const regexp6 = /[a-z0-9]a/i; // check str3 conatins a-z 0-9 before a
    const result6 = regexp6.test(str3);
    console.log("result6",result6); // true


    // '^' represents start of string
    const regexp7 = /^yesterday/i; //check str3 begins with yesterday
    const result7 = regexp7.test(str3);
    console.log("result7", result7);


    // '$' represents end of string

    const regexp8 = /white$/i ;// check str1 ends with white
    const result8= regexp8.test(str1);
    console.log("result8",result8) ;


    // m is for multiline matching
    const regexp9 = /^north/im;
    const result9 = regexp9.test(str4);
    console.log("reuslt9",result9);//true

    const regexp10 = /east$/im;
    const result10 = regexp10.test(str4);
    console.log("reuslt10",result10);//true


    const regexp11 = /white?/i; //word before ? is optional
    const result11 = regexp11.test(str1);// it matches for both white and whit
    console.log("reault11",result11);//true

    






}