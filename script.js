const currencyone=document.getElementById('currencyone');
const currencytwo=document.getElementById('currencytwo');
const amountone=document.getElementById('amountone');
const amounttwo=document.getElementById('amounttwo');
const swap=document.getElementById('swapbutton');
const rate=document.getElementById('rate');


function calculate(){
    const currencyonecode=currencyone.value;
    const currencytwocode=currencytwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/pair/${currencyonecode}/${currencytwocode}`)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.conversion_rate);
        const conversionRate=data.conversion_rate;
        rate.innerText=`1 ${currencyone.value}=${conversionRate}${currencytwo.value}`;
        const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencytwocode }).format((amountone.value * conversionRate).toFixed(2))
            amounttwo.value = amount2;
    })
}
//event listneres
currencyone.addEventListener('change', calculate);
amountone.addEventListener('input', calculate);
currencytwo.addEventListener('change', calculate);
amounttwo.addEventListener('input', calculate);
calculate();