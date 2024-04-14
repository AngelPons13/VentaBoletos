document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const cantidad = document.getElementById('cantidad').value;
    const horario = document.getElementById('horario').value;

    alert(`Gracias, ${nombre}! Has comprado ${cantidad} boletos de ${origen} a ${destino} para el ${fecha} a las ${horario}.`);
});
