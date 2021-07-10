
var result = document.getElementById('result');

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if(principal<=0) {
        alert('Enter a positive non zeronumber.');
        document.getElementById("principal").focus();
    } else {
        resultReport(principal, rate, interest, year);
    }
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

document.getElementById("rate").addEventListener('change', updateRate);

function resultReport(ammount, rate, interest, year){
    result.innerHTML = `
    Interest:<br/>
    If you deposit <span class="highlight">${ammount}</span>,<br />
    at an interest rate of <span class="highlight">${rate}</span>.<br />
    You will receive an amount of <span class="highlight">${interest}</span>,<br />
    in the year <span class="highlight">${year}</span>.
    `;
}