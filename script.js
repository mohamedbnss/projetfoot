document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (event) {
    createFootball(event.clientX, event.clientY);
  });

  function createFootball(x, y) {
    const football = document.createElement('div');
    football.className = 'football-clicked';
    football.style.left = x + 'px';
    football.style.top = y + 'px';
    document.body.appendChild(football);

    setTimeout(function () {
      football.remove();
    }, 1000);
  }
});

