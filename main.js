const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const numRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})(\s|-)?([0-9]{3})(\s|-)?([0-9]{4})$/;

const checkInput = () => {
    const inputVal = input.value;

    if (inputVal) {
        if (numRegex.test(inputVal)) {
            results.textContent = `Valid US number: ${inputVal}`;
        } else {
            results.textContent = `Invalid US number: ${inputVal}`;
        }
    } else {
        alert('Please provide a phone number');
    }
}

checkBtn.addEventListener('click', checkInput);

clearBtn.addEventListener('click', () => {
    input.value = '';
    results.textContent = '';
});