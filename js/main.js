//this is the container where are going to store the information
const container = document.querySelector('#cont');

//we make the request to the server
fetch("https://reqres.in/api/users?page=2")
    .then(res => res.text())
    .then(res => getData(JSON.parse(res).data));

//this function allows us display the information on the screen
function getData(data){
    //through the loop we go through the data and create the different elements
    data.forEach(element => {
        let id = `<p class="id">${element.id}</p>`;
        let  email = `<p class="email">${element.email}</p>`;
        let fName = `<p class="f-name">${element.first_name}</p>`;
        let lName = `<p class="l-name">${element.last_name}</p>`;
        //add the information to the container
        container.innerHTML += "<div>" +id + email + fName + lName + "</div>";
    });
}
