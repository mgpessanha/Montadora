function func_muda_cor(){
    let cor = document.getElementById("muda_cor").value;
    document.getElementById("colorida").style.backgroundColor = cor;
}

let montadoras = ['BMW', 'Mercedes', 'Lamborghini','Bentley','Porsche','Gurgel'];
seletor = document.querySelector("input");
click = 0;

const quantidade = () =>{
    let quant = document.getElementById("quantidade").value;
    mostra_montadoras(quant)
}

const mostra_montadoras = (quant) =>{
    let selectMontadoras = document.getElementById("montadoras");
    selectMontadoras.innerHTML = ``;
    for (let i = 0; i < quant; i++) {
        selectMontadoras.innerHTML += `<option value="${i}">${montadoras[i]}</option>`
    }
}

function selecionar (){
    let click = document.getElementById("montadoras").value;
    document.getElementById("span").innerText = montadoras[click]
}

function nova_montadora(){
    let nova_montadora = document.getElementById("nova_montadora").value;
    montadoras.push(nova_montadora)
    quantidade();
}

function remove_montadora() {
    montadoras.pop();
    quantidade();
}
