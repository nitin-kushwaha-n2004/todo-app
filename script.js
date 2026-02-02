const input = document.querySelector('#todoInput');
const btn = document.querySelector('#todoBtn');
const todoList = document.querySelector('#todoList');

btn.addEventListener('click', () => {
    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerText = value;

    //     todoList.appendChild(li);
    //     //P BANNA HAI JISPAR MUJHE LI OR DELETE BUTTON LIST MEI DHIKNA CHIYA 


    // li.appendAchild(delBtn);
    // todoList.appendchild(li);

    // input.value = "";


    const delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";
});