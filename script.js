document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregado e pronto!");

    // Mudar o texto ao clicar no botão
    var changeTextButton = document.getElementById("change-text-button");
    if (changeTextButton) {
        changeTextButton.addEventListener("click", function() {
            console.log("Botão clicado!");
            var welcomeMessage = document.getElementById("welcome-message");
            if (welcomeMessage) {
                welcomeMessage.innerText = "Obrigado por clicar no botão!";
            } else {
                console.error("Elemento com ID 'welcome-message' não encontrado.");
            }
        });
    } else {
        console.error("Elemento com ID 'change-text-button' não encontrado.");
    }

    // Exibir alerta ao enviar o formulário
    var feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir o envio do formulário
            alert("Feedback enviado! Obrigado.");
            var feedback = document.getElementById("feedback");
            if (feedback) {
                feedback.value = ""; // Limpar o campo de texto
            } else {
                console.error("Elemento com ID 'feedback' não encontrado.");
            }
        });
    } else {
        console.error("Elemento com ID 'feedback-form' não encontrado.");
    }

    // Lightbox para a galeria de imagens
    var galleryItems = document.querySelectorAll(".gallery-item img");
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.querySelector(".close");

    galleryItems.forEach(function(item) {
        item.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Função de pesquisa
    var searchBar = document.getElementById("search-bar");
    if (searchBar) {
        searchBar.addEventListener("input", function() {
            var filter = this.value.toLowerCase();
            var galleryItems = document.querySelectorAll(".gallery-item");

            galleryItems.forEach(function(item) {
                var imgAlt = item.querySelector("img").alt.toLowerCase();
                if (imgAlt.includes(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // Função para atualizar data e hora
    function updateDateTime() {
        var now = new Date();
        var date = now.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        var time = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('date-time').innerText = `${date} ${time}`;
    }

    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);
});
