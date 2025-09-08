// fecha del evento
const eventDate = new Date("September 15, 2025 18:00:00").getTime();

// funcion principal del contador
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // para cuando el evento ya comenzo
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h4>¡El evento ha comenzado! 🐾</h4>";
        return;
    }

    // calculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // actualizar la interfaz
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
}

// para que siempre tengan dos digitos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// inicia el contador
const countdownInterval = setInterval(updateCountdown, 1000);

// ejecutar al cargar la pagina
updateCountdown();