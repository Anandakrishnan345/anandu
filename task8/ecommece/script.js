
{
    let xhr = new XMLHttpRequest();

    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        
         xhr.send();
    });
   

    xhr.open("get",'https://fakestoreapi.com/products'); 
    // xhr.send();
    console.log("xhr :",xhr);
    xhr.onreadystatechange = function (){
        console.log("ready sate :",xhr.readyState);
        console.log("statusCode :",xhr.status);
        let contents = document.getElementById('contents');
       
        
        
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
                <div class="content" id="contents">
                <div class="innercontent">
                    <h3 class="title">${parsed_response[i].title}</h3>
                    <img src="${parsed_response[i].image}" alt="" width="294px" height="424px">
                    <div class="priceAndcart"><div class="price">&#8377;${parsed_response[i].price}</div> <div class="cart">Add <img src="/anandu/task8/ecommece/images/icons8-cart-30.png" alt=""></div> </div>
                </div>
            </div>
                `
               

            }
            
            contents.innerHTML=datas;


        } else{
            console.log("failed");
        }

        }else{
            console.log("state not completed")
        }
       
    }
}
