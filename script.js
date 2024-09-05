
let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');
let logo = document.getElementById('logo');

function addTask(){
    if(inputBox.value === ''){
        alert('Please add your task first.');
    } else {
        let task = document.createElement('li');
        task.innerHTML = `
            ${inputBox.value}
            <i class="fa-solid fa-edit edit"></i>
            <span>\u00d7</span>
        `;
        listContainer.appendChild(task);

        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit')) {
        let newTask = prompt('Edit your task:', e.target.previousSibling.textContent.trim());
        if (newTask !== null && newTask.trim() !== '') {
            e.target.previousSibling.textContent = newTask;
            saveData();
        }
    } else if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function welcome(){
    alert('Welcome User. Love from Soumojit Poddar...');
}

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTask();

