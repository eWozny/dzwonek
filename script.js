fetch('https://cors-anywhere.herokuapp.com/https://svr135.supla.org/api/v2.3.0/channels/states', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer MzgzMWY4YzZiZjE2ZGVmZjQ2YjEyYjNkZjhmZjVlOTViZjBkN2ZjYjE2NDViNjY4ZGQzZmM3MWY0NGY2MTk2YQ.aHR0cHM6Ly9zdnIxMzUuc3VwbGEub3Jn',
    }
})
.then(response => response.json())
.then(data => {
    console.log('Odpowiedź z API:', data);
    const channel = data.states.find(state => state.id === 7465);
    if (channel && channel.state.temperature !== undefined) {
        const temperatura = channel.state.temperature;
        console.log('Temperatura:', temperatura);
        document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
    } else {
        console.error('Nie znaleziono temperatury.');
        document.getElementById('temperatura').textContent = 'Błąd pobierania temperatury';
    }
})
.catch(error => {
    console.error('Błąd:', error);
    document.getElementById('temperatura').textContent = 'Błąd pobierania temperatury';
});

