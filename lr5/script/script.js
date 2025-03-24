const operatorsMap = {
    '¬': '!',   // Заперечення
    '~': '===', // Еквівалентність
    '^': '&&',  // Логічне І
    '→': '||'   // Імплікація (!A || B має бути окремо оброблена)
};

function convertExpression(expression) {
    return expression.replace(/¬|~|\^|→/g, match => operatorsMap[match]);
}

function generateTable() {
    let expression = document.getElementById("expression").value.trim();
    if (!expression) {
        alert("Будь ласка, введіть булевий вираз!");
        return;
    }

    let variables = Array.from(new Set(expression.match(/[a-z]/g))).sort();
    let convertedExpr = convertExpression(expression);
    let table = document.getElementById("truth-table");

    if (!table) {
        console.error("Таблиця істинності не знайдена в HTML.");
        return;
    }

    table.innerHTML = "";

    let headerRow = table.insertRow();
    variables.forEach(v => headerRow.insertCell().innerText = v);
    headerRow.insertCell().innerText = expression;

    for (let i = 0; i < (1 << variables.length); i++) {
        let row = table.insertRow();
        let values = {};

        variables.forEach((v, index) => {
            values[v] = (i & (1 << index)) ? 1 : 0;
            row.insertCell().innerText = values[v];
        });

        try {
            let evalExpr = convertedExpr.replace(/[a-z]/g, match => values[match]);
            let result = eval(evalExpr);
            row.insertCell().innerText = result ? 1 : 0;
        } catch (error) {
            row.insertCell().innerText = "Помилка";
            console.error("Помилка у виразі:", error);
        }
    }
}
