const  btn = document.querySelector("#btn");
const num = document.querySelector("#num");
const divDivisores = document.querySelector("#div-divisores")

btn.addEventListener('click', (evt) =>{
    let numDigitado = Number(inputNum.value)

    for(i = 0; i <= numDigitado; i++){
        if(numDigitado % i == 0){
            divDivisores.innerHTML += `${i} <br>`
        }
    }
})