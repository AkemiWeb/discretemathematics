const n = 5;
const table = document.getElementById('matrix-table');

function checkRelation() {
    const matrix = [];
    let inputs = table.getElementsByTagName('input');
    let index = 0;

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = parseInt(inputs[index].value);
            index++;
        }
    }

    const result = [];

    const isReflexive = checkReflexive(matrix);
    result.push(`Рефлексивне: ${isReflexive ? 'Так' : 'Ні'}`);

    const isAntireflexive = checkAntireflexive(matrix);
    result.push(`Антирефлексивне: ${isAntireflexive ? 'Так' : 'Ні'}`);

    const isSymmetric = checkSymmetric(matrix);
    result.push(`Симетричне: ${isSymmetric ? 'Так' : 'Ні'}`);

    const isAntisymmetric = checkAntisymmetric(matrix);
    result.push(`Антисиметричне: ${isAntisymmetric ? 'Так' : 'Ні'}`);

    const isTransitive = checkTransitive(matrix);
    result.push(`Транзитивне: ${isTransitive ? 'Так' : 'Ні'}`);

    document.getElementById('result').innerHTML = result.join('<br>');
}

function checkReflexive(matrix) {
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] !== 1) return false;
    }
    return true;
}

function checkAntireflexive(matrix) {
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] !== 0) return false;
    }
    return true;
}

function checkSymmetric(matrix) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== matrix[j][i]) return false;
        }
    }
    return true;
}

function checkAntisymmetric(matrix) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1 && matrix[j][i] === 1 && i !== j) return false;
        }
    }
    return true;
}

function checkTransitive(matrix) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                for (let k = 0; k < n; k++) {
                    if (matrix[j][k] === 1 && matrix[i][k] === 0) return false;
                }
            }
        }
    }
    return true;
}