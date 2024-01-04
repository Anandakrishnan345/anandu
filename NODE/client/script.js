async function getuserData() {
    let userData = await fetch('http://localhost:3000/getData');
    console.log("userData :",userData);
    let parsedUserData = await userData.json();
    console.log("parsedUserData :",parsedUserData);
     let tbody= document.getElementById('tbody');
     let content ='';
     for(let i=0;;)
}