
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    document.querySelector('.seccion-categoria').scrollIntoView({ behavior: 'smooth' });

    const ciudad = document.getElementById('ciudad').value.toLowerCase();
    const tipo = document.getElementById('tipo-sensor').value.toLowerCase();
    const marca = document.getElementById('marca').value.toLowerCase();

    const tarjetas = document.querySelectorAll('.tarjeta-sensor');

    tarjetas.forEach(tarjeta => {
        const ciudadTarjeta = tarjeta.dataset.ciudad || '';
        const tipoTarjeta = tarjeta.dataset.tipo || '';
        const marcaTarjeta = tarjeta.dataset.marca || '';

        const coincideCiudad = !ciudad || ciudadTarjeta === ciudad;
        const coincideTipo = !tipo || tipoTarjeta === tipo; 
        const coincideMarca = !marca || marcaTarjeta === marca;

        if (coincideCiudad && coincideTipo && coincideMarca) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});

