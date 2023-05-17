let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbole = false;

const passwordRangeInputEl = document.getElementById("passRangeInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");

const generatePassword = (passLength) => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumbers ? "0123456789" : "";
    const symbols = isSymbole ? "!@#$%^&*()_+" : "";

    const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;

    let password = "";

    for (let i = 0; i < passLength; i++) {
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex];
    }
    return password;

}

passwordRangeInputEl.addEventListener("input", (e) => {
    passwordLength = +e.target.value;
    passRangeValueEl.innerHTML = passwordLength;
});

genBtn.addEventListener("click", () => {

    const upperCaseCheckEl = document.getElementById("uppercase");
    const numbersCheckEl = document.getElementById("numbers");
    const SymboleCheckEl = document.getElementById("symbols");

    isUpperCase = upperCaseCheckEl.checked;
    isNumbers = numbersCheckEl.checked;
    isSymbole = SymboleCheckEl.checked;


    const password = generatePassword(passwordLength);
    passwordEl.innerHTML = password;
    console.log("password", password);
});

passwordEl.addEventListener("click", (e) => {
    navigator.clipboard
        .writeText(passwordEl.innerHTML)
        .then(() => {
            alert("Copied to Clipboard");
        })
        .catch((err) => {
            alert("could not copy");
        })
});

















