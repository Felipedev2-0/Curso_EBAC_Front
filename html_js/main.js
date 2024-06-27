document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault() // evita o envio do formulario

    var campoA = parseInt(document.getElementById('campoA').value)
    var campoB = parseInt(document.getElementById('campoB').value)

    if (campoB > campoA) {
        showMessage('Formulario válido!', 'valid')
    } else {
        showMessage('Formulario inválido! O número em B deve ser maior que o número em A.', 'invalid')
    }
})


function showMessage(message, className) {
    var messageDiv = document.getElementById('result')
    messageDiv.textContent = message
    messageDiv.className = 'message' + className
}