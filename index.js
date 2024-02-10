const user=[
    {username:"dilip",password:"12345"},
    {username:"sonu",password:"12345"},
    {username:"nitesh",password:"saloni"}
];
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var validUser = user.find(user => user.username === username && user.password === password);
    if (validUser) {
        greet(username);
    } else {
        alert("Invalid Details");
    }
}
function greet(username) {
    alert("Welcome" +"   " +username);
    window.location.href="./index.html"
}