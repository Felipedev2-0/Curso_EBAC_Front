$(document).ready(function () {
    // 👉 Máscara para o CEP
    $('#cep').mask('00000-000');
  
    // 👉 Buscando dados de usuário com ID 1
    $('#btn-buscar-cep').on('click', function () {
        $('.spinner-border').removeClass('d-none'); // Mostra o spinner

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/1',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $('#nome').val(data.name.split(' ')[0]); // Divide por espaço e pega o primeiro nome
                $('#endereco').val(`${data.address.street}, ${data.address.suite}, ${data.address.city}`);
            },
            error: function () {
                alert('Erro ao buscar dados');
            },
            complete: function () {
                $('.spinner-border').addClass('d-none'); // Esconde o spinner
            }
        });
    });
  
    // 👉 Enviando o formulário com AJAX (simulando um cadastro)
    $('#formulario-pedido').on('submit', function (event) {
        event.preventDefault();

        const data = { 
            nome: $('#nome').val(),
            endereco: $('#endereco').val()
        };

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                alert('Cadastro enviado com sucesso!');
                console.log(response); // Exibe a resposta real
            },
            error: function () {
                alert('Erro ao enviar pedido');
            }
        });
    });
});
