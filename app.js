var username = document.querySelector("#name");
var dob = document.querySelector("#dob");
var btnSubmit = document.querySelector("#btn-submit");
var warningName = document.querySelector("#warning-name");
var warningDob = document.querySelector("#warning-dob");
var output = document.querySelector("#output");

function emptyStringCheck() {
    if (username.value == "") {
        warningName.innerText = "name required*";
    } else if (dob.value == "") {
        warningName.innerText = "";
        warningDob.innerText = "Date of birth required*";
    } else {
        warningName.innerText = "";
        warningDob.innerText = "";
        dateValidation();
    }
}

function dateValidation() {
    if (!dob.value.match(/([0-2][0-9]|3[01])\/(0[0-9]|1[0-2])/)) {
        warningDob.innerText = "Enter valid date in dd/mm format";
    } else {
        warningDob.innerText = "";
        primeNumberCheck();
    }
}

function primeNumberCheck() {
    var number = dob.value.slice(0,2) + dob.value.slice(-2);
    console.log(number);
    var counter = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++;
        }
    }
    if (counter == 2) {
        output.innerHTML = "It is a prime number"
    } else {
        output.innerHTML = "It is not a prime number";
    }
}

btnSubmit.addEventListener("click", emptyStringCheck);