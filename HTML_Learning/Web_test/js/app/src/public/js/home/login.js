"use strict";

const inputID = document.querySelector("#ejsID"),
    inputPW = document.querySelector("#ejsPW"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login() {
    const req = {
        ID : inputID.value,
        PW : inputPW.value
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
}
