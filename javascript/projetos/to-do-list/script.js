const btnAddTask = document.getElementById("btn-add-task")
const tBody = document.getElementById("list-task")


btnAddTask.addEventListener("click", function () {
    const inputTask = document.getElementById("input-task")
    const tr = document.createElement("tr")
    const taskTd = document.createElement("td")
    const actionsTd = document.createElement("td")
    actionsTd.innerHTML = "Editar - Concluir - Rejeitar"
    taskTd.innerHTML = inputTask.value

    tr.appendChild(taskTd)
    tr.appendChild(actionsTd)
    tBody.appendChild(tr)

    console.log(tBody)
})