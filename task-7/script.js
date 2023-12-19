{
    let xhr = new XMLHttpRequest();

    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        
        
        function show() {
            document.getElementById('dip').style.visibility = 'visible';
         }
         show();
         xhr.send();
    });
   

    xhr.open("get",'https://fakestoreapi.com/products'); 
    // xhr.send();
    console.log("xhr :",xhr);
    xhr.onreadystatechange = function (){
        console.log("ready sate :",xhr.readyState);
        console.log("statusCode :",xhr.status);
        let content = document.getElementById('content');
       
        
        
        if(xhr.readyState==4){
            if(xhr.status==200){

            
            let response = xhr.response;
            console.log("response :",response);
            console.log("type of response :",typeof(response));

            let parsed_response = JSON.parse(response);
            console.log("parsed_response:",parsed_response);
            console.log("typeof parsed_response",typeof(parsed_response));
            
            datas = '';
            
            for(let i = 0;i<parsed_response.length;i++){
                datas = datas+`
                <tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].title}</td>
                <td>${parsed_response[i].price}</td>
                <td>${parsed_response[i].description}</td>
                <td><img src="${parsed_response[i].image}" alt="" width="100px" height="50px"> </td>
                
                </tr>
                `
               

            }
            
            content.innerHTML=datas;


        } else{
            console.log("failed");
        }

        }else{
            console.log("state not completed")
        }
       
    }
}