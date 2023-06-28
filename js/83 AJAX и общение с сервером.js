'use strict';

const inputRub = document.querySelector("#rub"),
      inputUSD = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener("readystatechange", () => {
    //     // console.log(request.readyState);
    //     // console.log(request.status);
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         console.log(data);
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUSD.value = "Что-то пошло не так!!!";
    //     }
    
    request.addEventListener("load", () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            console.log(data);
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что-то пошло не так!!!";
        }
    });
    //Свойства request
    //status
    //statusText
    //response
    //readyState
});

