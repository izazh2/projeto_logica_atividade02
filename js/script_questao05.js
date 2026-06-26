//capturar os elementos do DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista')
const inputRenda = document.querySelector('#renda')

let contPessoas = 0
let contFr = 0
let cont2000 = 0
let contM = 0
let acum = 0.0


formPessoa.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    let numDigitado = Number(inputRenda.value)

    contPessoas++
   
    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        idade: dadosForm.get('idade'),
        sexo: dadosForm.get('sexo'),
        renda: dadosForm.get('renda')
    }

    formPessoa.reset()

    if(pessoa.sexo === 'masculino'){
        acum += numDigitado
    }

    if(pessoa.sexo === 'masculino'){
        contM++
    }

    if((pessoa.sexo === 'feminino') && (pessoa.renda >=1000) && (pessoa.renda) <= 3000){
        contFr++
    }

    if(2000 <= pessoa.renda){
        cont2000++
    }

    divLista.innerHTML = ` Quantas pessoas foram digitadas: ${contPessoas} pessoas. <p> A média de salário do sexo masculino: R$ ${((acum) / (contM)).toFixed(2).replace('.',',')} reais <p>  Quantidade de Mulheres com renda entre R$ 1000,00 e R$ 3000,00: ${contFr} mulheres. <p> Percentual de pessoas do sexo masculino e feminino com salário maior ou igual a R$ 2000,00: ${(((cont2000) / (contPessoas)) * 100).toFixed(2)} %`


})