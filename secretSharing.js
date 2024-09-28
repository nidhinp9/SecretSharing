const fs = require('fs');

// Function to decode the value from the specified base
function decodeValue(base, value) {
    return BigInt(parseInt(value, parseInt(base)));
}

// Lagrange Interpolation to find the constant term c
function lagrangeInterpolation(xValues, yValues) {
    const n = xValues.length;
    let c = BigInt(0); // Use BigInt for constant term

    // Calculate the constant term using Lagrange Interpolation
    for (let i = 0; i < n; i++) {
        let term = yValues[i];

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                // Calculate the product term
                term = (term * BigInt(0 - xValues[j])) / BigInt(xValues[i] - xValues[j]);
            }
        }

        // Add the term to the constant
        c += term;
    }

    return c;
}

// Read and parse the input JSON file
function readInput(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

// Main function to execute the secret sharing algorithm
function secretSharingAlgorithm(filePath) {
    const input = readInput(filePath);
    const n = input.keys.n;
    const k = input.keys.k;
    
    let xValues = [];
    let yValues = [];

    for (let i = 1; i <= n; i++) {
        const point = input[i.toString()];
        if (point) {
            const base = point.base;
            const value = point.value;
            const x = i; // x is the index
            const y = decodeValue(base, value);

            console.log(`Decoded point: x = ${x}, base = ${base}, value = ${value}, y = ${y}`);
            xValues.push(x);
            yValues.push(y);
        }
    }

    // Calculate the constant term c
    const c = lagrangeInterpolation(xValues, yValues);
    console.log(`Constant term for ${filePath}: ${c}`);
}

// Execute for both test cases
secretSharingAlgorithm('data/testcase1.json');
secretSharingAlgorithm('data/testcase2.json');
