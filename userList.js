const tbody = document.getElementById("tbodyUserList")
window.onload = () => {
    getApiUserList();
}
const getApiUserList = async () => {
    const response = await axios ({
        url :  "https://reqres.in/api/users?page=1",
        method : "get"
    });

    console.log(response.data.data);
    if (responseData.data.data[0].id == undefined){
        alert("userList not found");

    }else{
        for (let index = 0; index<responseData.data.data.length; index++){

        }

    }
}
