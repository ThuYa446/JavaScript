const formEl = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const todosArr = JSON.parse(localStorage.getItem("todos"));
    if(todosArr){
        todosArr.forEach(todo =>{
            addTodo(todo);
        })
    }

formEl.addEventListener("submit",(e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todo){
    let text = input.value;

    if(todo){
        text = todo.text;
    }
    if(text){
        const li = document.createElement("li");

        if(todo && todo.completed){
            li.classList.add("completed")
        }

        li.innerText = text;

        li.addEventListener("click", ()=> {
            li.classList.toggle('completed');
            updateLS();
        })

        li.addEventListener("contextmenu",(e) => {
            e.preventDefault();
            li.remove();
            updateLS();
        })

        todos.appendChild(li);
        updateLS();
        input.value = '';
    }
}

function updateLS(){
    const todosEl = document.querySelectorAll("li");
    const todos = [];
    todosEl.forEach(todo => {
        todos.push({
            text:todo.innerText,
            completed:todo.classList.contains("completed")
        })
    })

    localStorage.setItem("todos",JSON.stringify(todos));
}