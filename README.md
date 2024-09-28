# SecretSharing

This project implements a simplified version of **Shamir's Secret Sharing Algorithm** using polynomial interpolation to find the constant term of a polynomial given a set of encoded points. The project reads input test cases from a JSON file and decodes y-values provided in different bases to calculate the polynomial's constant term.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Algorithm](#algorithm)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Description
The SecretSharing project implements a simplified version of Shamir's Secret Sharing scheme. The primary objective is to find the constant term (`c`) of a polynomial given a set of roots in the form of points. Each point is represented by a key and a corresponding y-value, which is encoded in a specific base.

The polynomial can be represented as:
f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c

Given `k` roots, the goal is to calculate the constant term `c` using polynomial interpolation.

## Features
- Decode y-values provided in different bases.
- Calculate the constant term of a polynomial using Lagrange interpolation.
- Support for reading input from JSON files with multiple test cases.
- Prints decoded points and the resulting constant term for each test case.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Git (for version control)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/nidhinp9/SecretSharing.git
    ```

2. Navigate to the project directory:
    ```bash
    cd SecretSharing
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Project
1. To run the project, execute:
    ```bash
    node secretSharing.js
    ```

2. Ensure that your input test case files (e.g., `testcase1.json` and `testcase2.json`) are located in the `data` directory.

3. The program will read from these test case files, decode the values, and display the constant term for each test case.

# SecretSharing

A Node.js project for implementing Shamir's Secret Sharing scheme to securely distribute a secret among a group of participants.



## Project Structure

```plaintext
SecretSharing/
│
├── data/
│   ├── testcase1.json               # First test case
│   └── testcase2.json               # Second test case
│
├── secretSharing.js                 # Main program file implementing the logic
```

## Algorithm
1. **Read and Parse Input:**
   - Parse the JSON input to read `n` (total number of points) and `k` (minimum points needed).
   - For each point, extract the `base` and `value` fields.

2. **Decode Y-Values:**
   - Convert each `value` based on the provided base to its decimal (base-10) representation.

3. **Calculate Constant Term:**
   - Using Lagrange Interpolation, calculate the polynomial coefficients and find the constant term `c` of the polynomial.

4. **Print the Result:**
   - Display the decoded points and the calculated constant term for each test case.

## Example
For `testcase1.json`:
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
