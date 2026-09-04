const btnAddTask = document.getElementById("btn-add-task")
const tBody = document.getElementById("list-task")
const btnTaskDoneConfirm = document.getElementById("btnTaskDoneConfirm")
let tasks = []

const doneModalBs = document.getElementById("taskDoneModal")
let doneModal = new bootstrap.Modal(doneModalBs)
let indexTaskToDone = null

const btnTaskEditConfirm = document.getElementById("btnTaskEditConfirm")
const editModalBs = document.getElementById("taskEditModal")
let editModal = new bootstrap.Modal(editModalBs)
let indexTaskToEdit = null


// Pega os dados do localstorage para listar todos as atividades sempre que a página carregar
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"))
if (tasksLocalStorage && tasksLocalStorage.length > 0) {
    // Adiciona todas as atividades que foram pegas do localStorage ao array de tasks
    tasks.push(...tasksLocalStorage)
    initTable()
} else {
    console.log("Não há nada no localstorage")
}

// Função criada para excluir um elemento do nosso array
function deleteTask(index) {
    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    initTable()
}

function doneConfirm(taskIndex) {
    tasks = tasks.map(function (item, index) {
        if (index === taskIndex) {
            item.status = "done"
        }

        return item
    })
   
    localStorage.setItem("tasks", JSON.stringify(tasks))

    initTable()

    doneModal.hide()
}

btnTaskDoneConfirm.addEventListener("click", function () {
    doneConfirm(indexTaskToDone)
})


function doneTask(task, taskIndex) {
    const taskTitle = document.getElementById("taskDoneModalContent")
    taskTitle.innerHTML = task.title

    doneModal.show()

    indexTaskToDone = taskIndex
}


function openEditTaskModal(task, indexTask) {
    const taskTitle = document.getElementById("input-task-edit")
    taskTitle.value = task.title
    indexTaskToEdit = indexTask
    editModal.show()
}

btnTaskEditConfirm.addEventListener("click", function () {
    const inputTask = document.getElementById("input-task-edit")
    const selectedStatus = document.getElementById("select-status")

    const task = {
        title: inputTask.value,
        status: selectedStatus.value
    }

    tasks = tasks.map(function (item, index) {
        if (index === indexTaskToEdit) {
            item = task
        }

        return item
    })

    editModal.hide()
    localStorage.setItem("tasks", JSON.stringify(tasks))
    initTable()
})

// Esse algoritmo é a ação que é disparada quando clicamos no botão
// de criar a atividade/task
btnAddTask.addEventListener("click", function () {
    const inputTask = document.getElementById("input-task")
    const task = {
        title: inputTask.value,
        status: "doing"
    }
    
    tasks.push(task)

    // Adicionamos as tasks ao localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks))
    initTable()
})

function initTable() {
    tBody.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        const tr = document.createElement("tr")
        const tdTask = document.createElement("td")
        const tdStatusTask = document.createElement("td")
        const spanDone = document.createElement("span")
        spanDone.classList.add("badge", "bg-success")
        const spanDoing = document.createElement("span")
        spanDoing.classList.add("badge", "bg-info")

        const actionsTd = document.createElement("td")
        actionsTd.classList.add("d-flex", "gap-1", "justify-content-end")

        // Criamos um elemento html = button de editar
        const btnEdit = document.createElement("button")
        // Adicionamos o texto no botão = Editar
        btnEdit.innerHTML = "Editar"
        btnEdit.addEventListener("click", function () {
            openEditTaskModal(tasks[i], i)
        })
        // Adicionamos o texto as classes css do bootstrap no boão
        btnEdit.classList.add("btn", "btn-info", "btn-sm")

        // Criamos um elemento html = button de concluir
        const btnDone = document.createElement("button")
        btnDone.addEventListener("click", function () {
            doneTask(tasks[i], i)
        })
        // Adicionamos o texto no botão = Concluir
        btnDone.innerHTML = "Concluir"
        // Adicionamos o texto as classes css do bootstrap no boão
        btnDone.classList.add("btn", "btn-success", "btn-sm")
        
        const btnReject = document.createElement("button")
        btnReject.addEventListener("click", function () {
            deleteTask(i)
        })
        btnReject.innerHTML = "Excluir"
        btnReject.classList.add("btn", "btn-danger", "btn-sm")

        // Adicionamos o botão "editar" elemento filho dentro do td
        actionsTd.appendChild(btnEdit)
        // Adicionamos o botão "concluir" elemento filho dentro do td
        actionsTd.appendChild(btnDone)
        // Adicionamos o botão "excluir" elemento filho dentro do td
        actionsTd.appendChild(btnReject)

        tdTask.innerHTML = `${tasks[i].title}`


        if (tasks[i].status === "doing") {
            spanDoing.innerHTML  = `Em andamento`
            tdStatusTask.appendChild(spanDoing)
        }

        if (tasks[i].status === "done") {
            spanDone.innerHTML = `Concluida`
            tdStatusTask.appendChild(spanDone)
            tdTask.classList.add("text-muted")
        }
        

        // Adicionamos a td de atividade a tr - linha
        tr.appendChild(tdTask)
        tr.appendChild(tdStatusTask)
        // Adicionamos a td com os botões de ação a tr - linha
        tr.appendChild(actionsTd)
        // Adicionamos a linha ao tbody da tabela
        tBody.appendChild(tr)
    }
}