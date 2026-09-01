const btnAddTask = document.getElementById("btn-add-task")
const tBody = document.getElementById("list-task")
const tasks = []

// Função criada para excluir um elemento do nosso array
function deleteTask(index) {
    console.log(tasks)
    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
     tBody.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        const tr = document.createElement("tr")
        const taskTd = document.createElement("td")

        const actionsTd = document.createElement("td")
        actionsTd.classList.add("d-flex", "gap-1", "justify-content-end")

        // Criamos um elemento html = button de editar
        const btnEdit = document.createElement("button")
        // Adicionamos o texto no botão = Editar
        btnEdit.innerHTML = "Editar"
        // Adicionamos o texto as classes css do bootstrap no boão
        btnEdit.classList.add("btn", "btn-info", "btn-sm")

        // Criamos um elemento html = button de concluir
        const btnDone = document.createElement("button")
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

        taskTd.innerHTML = `${tasks[i]}`

        // Adicionamos a td de atividade a tr - linha
        tr.appendChild(taskTd)
        // Adicionamos a td com os botões de ação a tr - linha
        tr.appendChild(actionsTd)
        // Adicionamos a linha ao tbody da tabela
        tBody.appendChild(tr)
    }
    
}

// Pega os dados do localstorage para listar todos as atividades sempre que a página carregar
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"))
if (tasksLocalStorage && tasksLocalStorage.length > 0) {
    // Adiciona todas as atividades que foram pegas do localStorage ao array de tasks
    tasks.push(...tasksLocalStorage)

    // Laço de repetição utilizado para pegar item por item dentro do array
    // e exibir na tabela.
    for (let i = 0; i < tasksLocalStorage.length; i++) {
        const tr = document.createElement("tr")
        const tdTask = document.createElement("td")

        const actionsTd = document.createElement("td")
        actionsTd.classList.add("d-flex", "gap-1", "justify-content-end")

        // Criamos um elemento html = button de editar
        const btnEdit = document.createElement("button")
        // Adicionamos o texto no botão = Editar
        btnEdit.innerHTML = "Editar"
        // Adicionamos o texto as classes css do bootstrap no boão
        btnEdit.classList.add("btn", "btn-info", "btn-sm")

        // Criamos um elemento html = button de concluir
        const btnDone = document.createElement("button")
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

        tdTask.innerHTML = `${tasksLocalStorage[i]}`

        // Adicionamos a td de atividade a tr - linha
        tr.appendChild(tdTask)
        // Adicionamos a td com os botões de ação a tr - linha
        tr.appendChild(actionsTd)
        // Adicionamos a linha ao tbody da tabela
        tBody.appendChild(tr)
    }
} else {
    console.log("Não há nada no localstorage")
}


// Esse algoritmo é a ação que é disparada quando clicamos no botão
// de criar a atividade/task
btnAddTask.addEventListener("click", function () {
    // Pegamos o input onde digitamos os dados
    const inputTask = document.getElementById("input-task")
    
    // Criamos um elemento html = tr
    const tr = document.createElement("tr")
    // Criamos um elemento html = td para o nome da task
    const taskTd = document.createElement("td")

    // Criamos um elemento html = td para os botões de ação
    const actionsTd = document.createElement("td")   
    actionsTd.classList.add("d-flex", "gap-1", "justify-content-end")

    // Criamos um elemento html = button de editar
    const btnEdit = document.createElement("button")
    // Adicionamos o texto no botão = Editar
    btnEdit.innerHTML = "Editar"
    // Adicionamos o texto as classes css do bootstrap no boão
    btnEdit.classList.add("btn", "btn-info", "btn-sm")

    // Criamos um elemento html = button de concluir
    const btnDone = document.createElement("button")
    // Adicionamos o texto no botão = Concluir
    btnDone.innerHTML = "Concluir"
    // Adicionamos o texto as classes css do bootstrap no boão
    btnDone.classList.add("btn", "btn-success", "btn-sm")
    
    // Criamos um elemento html = button de deletar
    const btnReject = document.createElement("button")
    // Adicionamos o texto no botão = Excluir
    btnReject.innerHTML = "Excluir"
    // Adicionamos o texto as classes css do bootstrap no boão
    btnReject.classList.add("btn", "btn-danger", "btn-sm")

    // Adicionamos o botão "editar" elemento filho dentro do td
    actionsTd.appendChild(btnEdit)
    // Adicionamos o botão "concluir" elemento filho dentro do td
    actionsTd.appendChild(btnDone)
    // Adicionamos o botão "excluir" elemento filho dentro do td
    actionsTd.appendChild(btnReject)

    // Adicionamos o texto digitado no input ao td na tabela
    taskTd.innerHTML = inputTask.value
    
    // Adicionamos a atividade ao array de atividades e pegamos o total itens
    // que tem dentro do array para poder calcular qual indece o item foi adicionado
    const index = tasks.push(inputTask.value)

    // Adicionamos a acação de deletar item ao botão de deletar
    // passando o index do item como paramentro da função
    btnReject.addEventListener("click", function () {
        deleteTask(index - 1)
    })

    // Adicionamos as tasks ao localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks))

    // Adicionamos a td de atividade a tr - linha
    tr.appendChild(taskTd)
    // Adicionamos a td com os botões de ação a tr - linha
    tr.appendChild(actionsTd)
    // Adicionamos a linha ao tbody da tabela
    tBody.appendChild(tr)
})