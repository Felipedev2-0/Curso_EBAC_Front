// main.js

$(document).ready(function () {
    // Função para adicionar nova tarefa
    $('#task-form').on('submit', function (e) {
        e.preventDefault();

        // Pegar o valor da tarefa
        let task = $('#task').val();

        // Adicionar a tarefa na lista
        if (task) {
            $('ul').append('<li>' + task + '<button class="remove">Remover</button></li>');
            $('#task').val('');
        }
    });

    // Função para riscar a tarefa ao clicar
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('done');
    });

    // Função para remover a tarefa
    $('ul').on('click', '.remove', function (e) {
        e.stopPropagation();
        $(this).parent().remove();
    });
});