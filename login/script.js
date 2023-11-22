var predefusername = "Vaibhav"
var predefpassword = "Vaibhav@123"
function refer() {
    document.getElementById("username").classList.remove("wrong")
    document.getElementById("password").classList.remove("wrong")

}
function validate(event) {
    event.preventDefault();

    var userinputname = document.getElementById("username").value
    var userinputpass = document.getElementById("password").value
    console.log(userinputname, userinputpass)
    if (userinputname === predefusername && userinputpass === predefpassword) {
        window.location.href = "cat.webp"

    }
    else {
        if (userinputname !== predefusername) {
            document.getElementById("username").classList.add("wrong")


        }
        if (userinputpass !== predefpassword) {
            document.getElementById("password").classList.add("wrong")


        }

    }
}

