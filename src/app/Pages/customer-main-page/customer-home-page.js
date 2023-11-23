document.querySelector(".button1").addEventListener("click", function () {
    document.querySelector(".popup-SignIn").classList.add("active");
});

document.querySelector(".button2").addEventListener("click", function () {
    document.querySelector(".popup-SignUp").classList.add("active");
});

document.querySelector(".receipt-icon").addEventListener("click", function () {
    document.querySelector(".popup-Order").classList.add("active");
});

document.querySelector(".popup-SignIn .close-button").addEventListener("click", function () {
    document.querySelector(".popup-SignIn").classList.remove("active");
});

document.querySelector(".popup-SignUp .close-button").addEventListener("click", function () {
    document.querySelector(".popup-SignUp").classList.remove("active");
});

document.querySelector(".popup-Order .close-button").addEventListener("click", function () {
    document.querySelector(".popup-Order").classList.remove("active");
});


function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popupSignIn = document.getElementsByClassName('popup-SignIn');
    popupSignIn.classList.toggle('active')
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popupSignUp = document.getElementsByClassName('popup-SignUp');
    popupSignUp.classList.toggle('active')
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popupSignUp = document.getElementsByClassName('popup-Order');
    popupSignUp.classList.toggle('active')
}