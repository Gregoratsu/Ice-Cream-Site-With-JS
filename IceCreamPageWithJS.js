function showVanilla() {
    let van = document.getElementById("vanilla-qty");
    if (van.style.display == "block") { van.style.display = "none"; } else { van.style.display = "block"; }
    getValCone();
    getValCup();
    getValTot();
}
function showChocolate() {
    let cho = document.getElementById("chocolate-qty");
    if (cho.style.display == "block") { cho.style.display = "none"; } else { cho.style.display = "block"; }
    getValCone();
    getValCup();
    getValTot();
}
function showStrawberry() {
    let str = document.getElementById("strawberry-qty");
    if (str.style.display == "block") { str.style.display = "none"; } else { str.style.display = "block"; }
    getValCone();
    getValCup();
    getValTot();
}
function showBanana() {
    let ban = document.getElementById("banana-qty");
    if (ban.style.display == "block") { ban.style.display = "none"; } else { ban.style.display = "block"; }
    getValCone();
    getValCup();
    getValTot();
}
function showCoffee() {
    let cof = document.getElementById("coffee-qty");
    if (cof.style.display == "block") { cof.style.display = "none"; } else { cof.style.display = "block"; }
    getValCone();
    getValCup();
    getValTot();
}

function getValVan() {
    let valVan = document.getElementById("vanilla-qty").value;
    return Number(valVan);
}

function getValCho() {
    let valCho = document.getElementById("chocolate-qty").value;
    return Number(valCho);
}

function getValStr() {
    let valStr = document.getElementById("strawberry-qty").value;
    return Number(valStr);
}

function getValBan() {
    let valBan = document.getElementById("banana-qty").value;
    return Number(valBan);
}

function getValCof() {
    let valCof = document.getElementById("coffee-qty").value;
    return Number(valCof);
}

function getValTot() {
    let valTot = getValVan() + getValCho() + getValStr() + getValBan() + getValCof();
    let showTot = document.getElementById("final-price");
    showTot.innerHTML = valTot * 2 + " Euro";
    getValCone();
    getValCup();
}

function getValCone() {
    let valTot = getValVan() + getValCho() + getValStr() + getValBan() + getValCof();
    let valCone = document.getElementById("cone").checked;
    if (valCone) {
        if (valTot > 3) {
            alert("Please, pick max 3 scoops");
        }
    }
}

function getValCup() {
    let valTot = getValVan() + getValCho() + getValStr() + getValBan() + getValCof();
    let valCup = document.getElementById("cup").checked;
    if (valCup) {
        if (valTot > 5) {
            alert("Please, pick max 5 scoops");
        }
    }
}

function resetPageInputs() {
    forEach(input => input.value = "")
}




/*
function getValCone() {
    let valCone = document.getElementById("cup").value;
    return (valCone);
}

function getValCup() {
    let valCup = document.getElementById("cup").value;
    return (valCup);
}*/

/*  let valCone = document.getElementById("cone").value;
    let valCup = document.getElementById("cup").value;
    let valTot = getValVan() + getValCho() + getValStr() + getValBan() + getValCof();
    if (valCone = "cone" && valTot > 3) { alert("Please, pick max 3 scoops") }
    else if (valCup = "cup" && valTot > 5) { alert("Please, pick max 5 scoops") }
    else { (""); }*/
