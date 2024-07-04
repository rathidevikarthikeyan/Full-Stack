function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value

    let userDetails;
    if (user == "") {
        alert("Please Enter your username");
    } else if (pass == "") {
        alert("Please Enter your password");
    } else {
        // localStorage.
        userDetails = {
            username: user,
            password: pass
        }
    }
    console.log(userDetails);

}





