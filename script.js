// Funkcja do pobierania temperatury z API Supla
function getTemperature() {
    fetch('https://svr135.supla.org/api/v2.3.0/channels/states', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer MzgzMWY4YzZiZjE2ZGVmZjQ2YjEyYjNkZjhmZjVlOTViZjBkN2ZjYjE2NDViNjY4ZGQzZmM3MWY0NGY2MTk2YQ.aHR0cHM6Ly9zdnIxMzUuc3VwbGEub3Jn'  // Wstaw odpowiedni token API
        }
    })
    .then(response => response.json())
    .then(data => {
        const channel = data.states.find(state => state.id === 7465);  // Id temperatury
        if (channel && channel.state.temperature !== undefined) {
            const temperatura = channel.state.temperature;
            document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
        } else {
            console.error('Nie znaleziono temperatury.');
        }
    })
    .catch(error => {
        console.error('Błąd:', error);
    });
}

// Wywołanie funkcji w celu pobrania temperatury
getTemperature();

// Odświeżanie temperatury co minutę
setInterval(getTemperature, 60000);

// Możesz dodać tutaj inne funkcje do wyświetlania informacji o lekcjach i zegarze.
