async function getuserData() {
   


    let userData = await fetch('http://127.0.0.1:3000/getData');
    console.log("userData :",userData);
    let parsedUserData = await userData.json();
    console.log("parsedUserData :",parsedUserData);
     let tbody= document.getElementById('tbody');
     let content ='';
     for(let i=0;i<parsedUserData.length;i++){
        content=content +`
            <tr>
           
            <td><input type="text" name="task" id="task-${parsedUserData[i]._id}" value='${parsedUserData[i].task}' disabled="true"></td> 
          
            <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
            <td><button onclick="handleSave('${parsedUserData[i]._id}')">Save</button></td>
            <td><button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button></td>
            </tr>
        `
     }
     tbody.innerHTML=content;
}
getuserData();

function handleEdit(id){
    let _id = id;
    console.log("id :",_id)

    let task = document.getElementById(`task-${_id}`);
    console.log("task :",task);
    task.disabled=false;

    
}
async function handleSave(id){
    console.log("id :",id);
    let task = document.getElementById(`task-${id}`).value;
    console.log("task :",task);

    let data = {
        id,
        task,
        
    }
    let json_data = JSON.stringify(data);

    await fetch('http://127.0.0.1:3000/editData',{
        "method" : "PUT",
        "headers" : {
            "Content-Type" : "text/json"
        },
        "body":json_data,
    });
getuserData()
alert('updation successfull')
}
async function handleDelete(id){
    console.log("id :",id);
    let response = await fetch("http://127.0.0.1:3000/deleteData",{
        "method" : "DELETE",
        "headers":{
            "Content-Type" : "text/plain",
        },
        "body":id,
    });
    console.log("response :",response);
    let parsed_response = await response.text();
    console.log("parsed_response :",parsed_response);

    if(parsed_response === "success"){
        alert("Deletion successful");
    }else{
         alert("deletion failed");
    }
    getuserData()
}