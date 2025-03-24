const universalSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

function setToBitString(set) {
    let bitString = Array(10).fill(0);
    set.forEach(element => {
        bitString[element] = 1;
    });
    return bitString.join('');
}

function bitStringToSet(bitString) {
    let set = new Set();
    for (let i = 0; i < bitString.length; i++) {
        if (bitString[i] === '1') {
            set.add(i);
        }
    }
    return set;
}

function performOperations() {
    let setAInput = document.getElementById("setA").value;
    let setBInput = document.getElementById("setB").value;

    let setA = new Set(setAInput.replace(/[{}]/g, '').split(',').map(Number));
    let setB = new Set(setBInput.replace(/[{}]/g, '').split(',').map(Number));

    let bitA = setToBitString(setA);
    let bitB = setToBitString(setB);

    let union = (parseInt(bitA, 2) | parseInt(bitB, 2)).toString(2).padStart(10, '0');
    let unionSet = bitStringToSet(union);

    let intersection = (parseInt(bitA, 2) & parseInt(bitB, 2)).toString(2).padStart(10, '0');
    let intersectionSet = bitStringToSet(intersection);

    let difference = (parseInt(bitA, 2) & ~parseInt(bitB, 2)).toString(2).padStart(10, '0');
    let differenceSet = bitStringToSet(difference);

    let symmetricDifference = (parseInt(bitA, 2) ^ parseInt(bitB, 2)).toString(2).padStart(10, '0');
    let symmetricDifferenceSet = bitStringToSet(symmetricDifference);

    let cartesianProduct = [];
    setA.forEach(a => {
        setB.forEach(b => {
            cartesianProduct.push(`(${a}, ${b})`);
        });
    });

    document.getElementById("unionResult").textContent = `Об'єднання: {${[...unionSet].join(', ')}}`;
    document.getElementById("intersectionResult").textContent = `Перетин: {${[...intersectionSet].join(', ')}}`;
    document.getElementById("differenceResult").textContent = `Різниця: {${[...differenceSet].join(', ')}}`;
    document.getElementById("symmetricDifferenceResult").textContent = `Симетрична різниця: {${[...symmetricDifferenceSet].join(', ')}}`;
    document.getElementById("cartesianProductResult").textContent = `Декартовий добуток: ${cartesianProduct.join(', ')}`;
}