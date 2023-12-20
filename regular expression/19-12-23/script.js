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

    

    const str5="hello"
    const regexp12 = /[abc]/i;  //checks abc is present in str5
    const result12 = regexp12.test(str5);
    console.log("result12",result12); // false

   
    const regexp13 = /[^abc]/i;  //if there is no abc present in str5 then it will be true
    const result13 = regexp13.test(str5);
    console.log("result13",result13); // true


    const regexp14 = /[h+]/i //checks atleast one h is present in str5
    const result14 = regexp14.test(str5);
    console.log("result14",result14); // true

    const regexp15 = /o$/i;
    const result15 = regexp15.test(str5);
    console.log("result15",result15); // false
    


    const regexp16 = /o?$/i;
    const result16 = regexp16.test(str5);
    console.log("result14",result16); // true



    const regexp17 = /o+$/i;
    const result17 = regexp17.test(str5);
    console.log("result17",result17); // false



    // {} indicates the number of  charecters

    const regexp18 = /l{2}o$/i // o should be exactly after 2 l's
    const result18 = regexp18.test(str5);
    console.log("result18",result18);//true

    const regexp19 = /l{2,4}o$/i; //o should be exactly after between 2 to 4 l's
    const result19 = regexp19.test(str5)
    console.log("result19",result19);//true
    
    const regexp20 = /hel{2,}o$/i // 2 or more l is required
    const result20 = regexp20.test(str5)
    console.log("result20",result20);//true

    // \ indicates escape charecter used for matching any characters which has a special meaning

    const regexp21 = /\d/i;// if there is any digits it will be true
    const result21 = regexp21.test(str5);
    console.log("result21",result21);//false


    const regexp22 = /\D/i //if there is any on digit it will be true, if there is only digit it will be false 
    const result22 = regexp22.test(str5);
    console.log("result22",result22); true

    //suppose we want to match '.'in a string since it has special meaning in regullar expression it will not work

}

{
    const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i
    function checkResult(value){
        const result = regexpForDate.test(value);
        if(result){
            return '';

        }else{
            return'inavalid string';

        }
    }
    const value = "16-12-2023";
    let validaton_result = checkResult(value);
    console.log("validation_result : ",validaton_result);
    function onChange(arg){
        let validation_result = checkResult(arg.value);
        let label = document.getElementById('error');
        if (validation_result){
            label.innerHTML = validation_result;

        }else{
            label.innerHTML = validation_result
        }
    }
}

{
    const regexpForDate = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;
    
    function checkResult(value){
        const result = regexpForDate.test(value);
        if(result){
            return '';

        }else{
            return'inavalid string';

        }
    }
    const value = "16-12-2023";
    let validaton_result = checkResult(value);
    console.log("validation_result : ",validaton_result);
    function onChange(arg){
        let validation_result = checkResult(arg.value);
        let label = document.getElementById('error');
        if (validation_result){
            label.innerHTML = validation_result;

        }else{
            label.innerHTML = validation_result
        }
    }
}