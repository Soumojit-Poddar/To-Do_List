
let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box')
let logo = document.getElementById('logo')

function addTask(){
    if(inputBox.value ===''){
        alert('Please add your task first.');
    }
    else{
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = "\u00d7";
        task.appendChild(span);

        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
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
