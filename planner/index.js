
function criadorDeTarefas(){
    
const tarefa = document.getElementById("tarefa")
const diasSemana = document.getElementById("dias-semana")
const diaSelecionado = document.getElementById(diasSemana.value)
diaSelecionado.innerHTML += `<p>${tarefa.value}</p> `
tarefa.innerHTML = "" // nao funcionou
}
