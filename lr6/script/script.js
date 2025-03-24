function checkFunctionProperties() {
    let f = [];

    for (let i = 0; i < 8; i++) {
        let fValue = document.getElementById(`f${i.toString(2).padStart(3, '0')}`).value;
        f.push(Number(fValue));
    }

    let result = "";

    if (f.every(val => val === 0)) {
        result += "Функція зберігає константу 0. <br>";
    }

    if (f.every(val => val === 1)) {
        result += "Функція зберігає константу 1. <br>";
    }

    let isSelfDual = true;
    for (let i = 0; i < 8; i++) {
        if (f[i] === f[7 - i]) {
            isSelfDual = false;
            break;
        }
    }
    if (isSelfDual) {
        result += "Функція є самодвоїстою. <br>";
    }

    let isLinear = f[0] === f[1] && f[2] === f[3] && f[4] === f[5] && f[6] === f[7];
    if (isLinear) {
        result += "Функція є лінійною. <br>";
    }

    document.getElementById("result").innerHTML = result;

    let dnf = convertToDNF(f);
    let knf = convertToKNF(f);

    document.getElementById("dnf-result").innerHTML = dnf;
    document.getElementById("knf-result").innerHTML = knf;
}

function convertToDNF(f) {
    let dnf = "";
    for (let i = 0; i < 8; i++) {
        if (f[i] === 1) {
            let binary = i.toString(2).padStart(3, '0');
            let term = "";
            for (let j = 0; j < 3; j++) {
                if (binary[j] === "1") {
                    term += String.fromCharCode(120 + j); // 'x', 'y', 'z'
                } else {
                    term += "!" + String.fromCharCode(120 + j); // '!x', '!y', '!z'
                }
            }
            dnf += (dnf ? " + " : "") + term;
        }
    }
    return dnf || "Немає одиничних значень (неможливо представити ДНФ).";
}

function convertToKNF(f) {
    let knf = "";
    for (let i = 0; i < 8; i++) {
        if (f[i] === 0) {
            let binary = i.toString(2).padStart(3, '0');
            let term = "";
            for (let j = 0; j < 3; j++) {
                if (binary[j] === "0") {
                    term += String.fromCharCode(120 + j); // 'x', 'y', 'z'
                } else {
                    term += "!" + String.fromCharCode(120 + j); // '!x', '!y', '!z'
                }
            }
            knf += (knf ? " * " : "") + term;
        }
    }
    return knf || "Немає нульових значень (неможливо представити КНФ).";
}