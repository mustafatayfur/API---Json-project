const loading = document.getElementById("loading");
const submitBtn = document.getElementById("submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

window.onload = () =>{
    setTimeout(fillFormInput, 500);
}

const showLoading = () =>{
    loading.style.display = "block";
}

const removeLoading = () =>{
    loading.style.display = "none";
}

const fillFormInput = () =>{
    email.value = "eve.holt@reqres.in";
    password.value = "pistol";
    localStorage.setItem("email", EncryptStringAES(email.value));
    localStorage.setItem("password", EncryptStringAES(password.value));
}

submitBtn.addEventListener("click", (e) =>{
    // e.preventDefault();
    console.log("clicked");
    apiRegister();
});


const apiRegister = async ()=> {
    const bodyData = {
        email : email.value,
        password : password.value
    }
    const response = await axios ({
        url : "https://regres.in/api/register",
        data : bodyData,
        method : "post"
    });
    console.log(response);
}


// const apiRegister = async () => {
//     const bodyData = {
//         email : email.value,
//         password : password.value
//     }
//     console.log(bodyData);
//     console.log(JSON.stringify(bodyData));
//     await fetch("https://regres.in/api/register", {
//         method : "POST",
//         body : JSON.stringify(bodyData),
//         hesaders : {"Content-Type" : "application/json"}
//     })
//     .then((response) => response.json())
//     .then((jsonResponse)=>{
//         console.log(jsonResponse);
//         if (jsonResponse.id ==undefined){
//             alert(jsonResponse.error);
//             removeLoading();
//         }else{
//             removeLoading();
//             localStorage.setItem("tokenKey", jsonResponse);localStorage.setItem("tokenKeyEncrypyted", EncryptStringAES(jsonResponse.token));
//             // window.location.href = "userList.html";
//         }
//     })
//     .catch((error)=>{
//         alert(error);
//         removeLoading();
//     })
// }

