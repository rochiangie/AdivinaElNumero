let numeroSecreto = Math.floor(Math.random() * 100) + 1;

document.getElementById('adivinar').addEventListener('click', function() {
    const numeroUsuario = parseInt(document.getElementById('numero').value);
    const mensaje = document.getElementById('mensaje');

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        mensaje.style.color = "red";
    } else if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = "¡Correcto! ¡Lo lograste!";
        mensaje.style.color = "green";
        document.body.style.backgroundColor = "#90EE90"; // Cambio de fondo
        setTimeout(() => {
            mensaje.textContent = "¡Adivina otro número!";
            document.body.style.backgroundColor = "#f4f4f9"; // Fondo original
            numeroSecreto = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número
        }, 2000);
    } else if (numeroUsuario < numeroSecreto) {
        mensaje.textContent = "¡El número es más grande! Intenta otra vez.";
        mensaje.style.color = "orange";
    } else {
        mensaje.textContent = "¡El número es más pequeño! Intenta otra vez.";
        mensaje.style.color = "orange";
    }
});
