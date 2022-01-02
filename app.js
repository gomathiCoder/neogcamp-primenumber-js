var username = document.querySelector("#name");
var dob = document.querySelector("#dob");
var btnSubmit = document.querySelector("#btn-submit");
var warningName = document.querySelector("#warning-name");
var warningDob = document.querySelector("#warning-dob");
var output = document.querySelector("#output");

function primeNumberCheck(){
    var number = dob.value;
    var counter = 0;

    for(let i=1; i<=number; i++){
        if(number%i == 0){
            counter++;
        }
    }
    if(counter == 2){
        output.innerHTML = "It is a prime number"
    }
    else{
        output.innerHTML = "It is not a prime number";
    }
}

btnSubmit.addEventListener("click", primeNumberCheck);