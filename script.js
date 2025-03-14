// Funkcja do pobierania temperatury z API Supla
function getTemperature() {
    fetch('https://svr135.supla.org/api/v2.3.0/channels/states', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer TWÓJ_TOKEN_API'  // Wstaw odpowiedni token API
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Błąd odpowiedzi z API');
        }
        return response.json();
    })
    .then(data => {
        console.log('Odpowiedź z API:', data);  // Sprawdzanie odpowiedzi z API
        const channel = data.states.find(state => state.id === 7465);  // Id temperatury
        if (channel && channel.state.temperature !== undefined) {
            const temperatura = channel.state.temperature;
            console.log('Temperatura:', temperatura);  // Sprawdzanie wartości temperatury
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
}

// Wywołanie funkcji w celu pobrania temperatury
getTemperature();

// Odświeżanie temperatury co minutę
setInterval(getTemperature, 60000);
