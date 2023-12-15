{
    class myButton{
        button;
        constructor(content){
            this.button = document.createElement("button");
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }
        set width(width){
            this.button.style.width = width + "px";
           }
        set height(height){
            this.button.style.height = height + "px";
        }

        get width(){
            return this.button.style.width;
        }
        get height(){
            return this.button.style.height;
        }
        onclick(fn){
            this.button.onclick = fn;
        }
    }
    let ourButton = new myButton("clickhere");
    console.log("ourbutton",ourButton);

    ourButton.width = 100;
    ourButton.height = 150;

    console.log("ourbutton width is",ourButton.width);
    console.log("ourbutton height is",ourButton.height);

    ourButton.onclick(function (){
        console.log("button clicked...")
    });

  

    class YellowButton extends myButton{
        onclick(fn){
            this.button.onclick = function (){
                fn();
                this.button.style.background = "yellow";
            }.bind(this);
        }
    }
    let myYellowButton = new YellowButton("yellow button");
    myYellowButton.width = 200;
    myYellowButton.height = 200;
    console.log("myyellowbutton width",myYellowButton.width);
    console.log("myyellowbutton height",myYellowButton.height);

    myYellowButton.onclick(function (){
        console.log("button clicked....");
    });
}

// {
//     //javascript is a synchronous single threaded  language
//     console.log("first line")
//     console.log("second line")
//     setTimeout(()=>{
//         console.log("from setTimeout");
//     },5000);//callback queue with 5000ms delay
//     console.log("third line")

//     let datas = fetch(``); //microtask queue(has more priority)
//     console.log("datas",datas)

//     //web space environment
//     //javascript engine - call back queue and microtask queue
//     //event loop
//     //call stack
// }

{
    let xhr = new XMLHttpRequest();

    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        xhr.send();
    });

    xhr.open("get",'https://jsonplaceholder.typicode.com/users');
    // xhr.send();

    console.log("xhr :",xhr);

    xhr.onreadystatechange = function (){
        console.log("ready sate :",xhr.readyState);
        console.log("statusCode :",xhr.status);
        let content = document.getElementById('content')
        
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
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].website}</td>
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