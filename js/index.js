document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");
  const card = document.querySelector(".card");
  const acceptButton = document.querySelector(".acceptButton");
  const declineButton = document.querySelector(".declineButton");

  acceptButton.addEventListener("click", function() {
    card.style.display = "none";
    body.classList.remove("show-cookie-popup");
    removeGlassEffect(); // Remove o efeito de vidro
    // Configurar cookie de aceitação aqui
    Cookies.set('cookies_accepted', true, { expires: 365 }); // Define o cookie de aceitação com validade de 365 dias
  });

  declineButton.addEventListener("click", function() {
    card.style.display = "none";
    body.classList.remove("show-cookie-popup");
    removeGlassEffect(); // Remove o efeito de vidro
    // Configurar ação para declinar cookies aqui
    Cookies.set('cookies_accepted', true, {expires: 365}); // Define o cookie de aceitação como falso
  });

  // Verifica se os cookies foram previamente aceitos
  const cookiesAccepted = Cookies.get('cookies_accepted');
  if (cookiesAccepted !== undefined) {
    // Se os cookies já foram aceitos, oculta o card
    card.style.display = "none";
    body.classList.remove("show-cookie-popup");
    removeGlassEffect(); // Remove o efeito de vidro
  } else {
    // Se os cookies ainda não foram aceitos, exibe o card
    body.classList.add("show-cookie-popup");
  }

  // Cria um overlay de fundo
  const backgroundOverlay = document.createElement("div");
  backgroundOverlay.classList.add("background-overlay");
  body.appendChild(backgroundOverlay);

  // Função para remover o efeito de vidro
  function removeGlassEffect() {
    const backgroundOverlay = document.querySelector(".background-overlay");
    backgroundOverlay.remove(); // Remove o overlay de fundo
  }

  // Remove o efeito de vidro ao clicar fora do card
  backgroundOverlay.addEventListener("click", function(event) {
    if (event.target === backgroundOverlay) {
      card.style.display = "none";
      body.classList.remove("show-cookie-popup");
      removeGlassEffect(); // Remove o efeito de vidro
    }
  });
});
