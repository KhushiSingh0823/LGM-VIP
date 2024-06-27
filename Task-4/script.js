let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historyBtn = document.querySelector('.history-btn');
let historyContainer = document.querySelector('.history-container');
let historyList = document.querySelector('.history-list');
let closeBtn = document.querySelector('.close-btn');

let string = "";
let calculations = [];
let inputValueBeforeHistory = "";

historyBtn.addEventListener('click', () => {
    inputValueBeforeHistory = input.value;
    input.value = "0"; 
    historyContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    historyContainer.style.display = 'none';
    input.value = inputValueBeforeHistory; 
});

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if (button === historyBtn) {
            inputValueBeforeHistory = input.value;
            input.value = "0"; 
            historyContainer.style.display = 'block';
        } else if (e.target.innerHTML == '=') {
            try {
                let result = eval(string);
                input.value = result;
                calculations.push(`${string} = ${result}`);
                string = "";
                updateHistory();
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function updateHistory() {
    historyList.innerHTML = "";
    calculations.forEach(calc => {
        let historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = calc;
        historyList.appendChild(historyItem);
    });
    let clearHistoryBtn = document.createElement('button');
    clearHistoryBtn.classList.add('clear-history-btn');
    clearHistoryBtn.textContent = 'Clear History';
    historyList.appendChild(clearHistoryBtn);
    clearHistoryBtn.addEventListener('click', () => {
        historyList.innerHTML = "";
        calculations = [];
    });
}

let clearHistoryBtn = document.querySelector('.clear-history-btn');

clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = "";
  calculations = [];
});