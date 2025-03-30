const inputbox = document.getElementById('inputbox');
const taskslist = document.getElementById('taskslist');
function addtask() {
    if (inputbox.value === "") {
        alert("You must write something!")
    }
    // document.createElement() method in JavaScript is used to create a new HTML element dynamically
    else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        taskslist.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

taskslist.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", taskslist.innerHTML);
}

function showdata() {
    taskslist.innerHTML = localStorage.getItem("data");
}
showdata();