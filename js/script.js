// Função para iniciar o contador regressivo
function startCountdown() {
    // Data do evento (altere conforme necessário)
    const eventDate = new Date('2024-04-27T08:00:00');
  
    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = eventDate - currentDate;
  
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
      }
  
      // Calcula dias, horas, minutos e segundos restantes
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Atualiza os elementos HTML com os valores do contador
      document.getElementById('days').innerText = formatTime(days);
      document.getElementById('hours').innerText = formatTime(hours);
      document.getElementById('minutes').innerText = formatTime(minutes);
      document.getElementById('seconds').innerText = formatTime(seconds);
    }, 1000);
  }
  
  // Adiciona um zero à esquerda se o número for menor que 10
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  // Inicia o contador quando a página é carregada
  window.onload = startCountdown;
