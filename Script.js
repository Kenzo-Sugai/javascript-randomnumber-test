let alet = Math.floor(Math.random() * 100);

function button() {
    let n = document.getElementById("valor").value;

    if(n < alet && n > -1) {
        document.getElementById("change").innerHTML = "Muito fraco";
        document.getElementById("change").style.background = "red";
    }

    else if(n > alet && n < 100) {
        document.getElementById("change").innerHTML = "Muito forte";
        document.getElementById("change").style.background = "blue";
    }

    else if(n === alet) {
        document.getElementById("change").innerHTML = "Show!!";
        document.getElementById("change").style.background = "green";
    }
}