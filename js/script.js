// Selecting all elements we need
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passConf = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");

const errContainer = document.querySelector(".errors");
const errList = document.querySelector(".errors-list")

const btnTerms = document.querySelector(".link-terms"); 
const listOfTerms = document.querySelector(".terms-list");
const overlay = document.querySelector(".overlay");
const btnAgree = document.querySelector(".btn-agree");
const btnClose = document.querySelector(".btn-close");

// clicking terms link
btnTerms.addEventListener("click", () => {
    listOfTerms.classList.add("show");
    overlay.classList.add("show");
})

// agree with the terms
btnAgree.addEventListener("click", () => {
    terms.checked = true;
    listOfTerms.classList.remove("show");
    overlay.classList.remove("show");
})

// close terms
btnClose.addEventListener("click", () => {
    listOfTerms.classList.remove("show");
    overlay.classList.remove("show");
})

// event listener for submiting the form
form.addEventListener("submit", e => {
    // array to store errors
    const errorArray = [];
    clearErrors();
    // set up error for username
    if (username.value.length < 6) {
        errorArray.push("The username must be at least 6 characters");
    }
    // set up error for password
    if (password.value.length < 10) {
        errorArray.push("The password must be at least 10 characters");
    }
    // set up error for password and confirmation password
    if (passConf.value !== password.value) {
        errorArray.push("The passwords must match");
    }
    // set up error for terms checkbox
    if (!terms.checked) {
        errorArray.push("You are not agree with terms");
    }
    // checking for errors
    if (errorArray.length > 0) {
        e.preventDefault();
        showErrors(errorArray);
    } else {
        alert("The account was created successfully!");
    }
})

function clearErrors() {
    errList.innerHTML = "";
    errContainer.classList.remove("show");
}

function showErrors(errorArray) {
    // Adding each error to the error-list
    errorArray.forEach(errArr => {
        const li = document.createElement("li");
        li.innerText = errArr;
        errList.appendChild(li);
    })
    errContainer.classList.add("show");
}