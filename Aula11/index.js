// . checked = property that determines the checked state of an 
//          HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `Você está inscrito`;
    }
    else{
        subResult.textContent = `Você NÃO está inscrito`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Você está pagando com Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `Você está pagando com Master Card`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Você está pagando com PayPal`;
    }
    else{
        paymentResult.textContent = `Você deve selecionar um método de pagamento`;
    }
}