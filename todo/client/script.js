async function getuserData() {
   


    let userData = await fetch('http://localhost:3000/getData');
    console.log("userData :",userData);
    let parsedUserData = await userData.json();
    console.log("parsedUserData :",parsedUserData);
     let tbody= document.getElementById('tbody');
     let content ='';
     for(let i=0;i<parsedUserData.length;i++){
        content=content +`
            <tr>
            <td>${parsedUserData[i]._id}</td>
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