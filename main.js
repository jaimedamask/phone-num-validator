const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const numRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})(\s|-)?([0-9]{3})(\s|-)?([0-9]{4})$/;