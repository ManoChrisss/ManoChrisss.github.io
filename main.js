        // --- 1. Animação de Fade-in ao scroll ---
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.oculto').forEach((el) => observador.observe(el));

        // --- 2. Lógica do Modal ---
        const modal = document.getElementById('modal-unico');
        const corpoModal = document.getElementById('corpo-modal');
        const imagensZoom = document.querySelectorAll('.imagem-card');

        imagensZoom.forEach(imagem => {
            imagem.addEventListener('click', () => {
                corpoModal.innerHTML = '';

                const imagemClone = imagem.cloneNode(true);
                imagemClone.classList.remove('imagem-card'); // remove estilo do card
                imagemClone.classList.add('midia-modal');    // adiciona estilo do modal

                corpoModal.appendChild(imagemClone);
                modal.style.display = 'flex';
    });
});


        function fecharModal() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                fecharModal();
            }
        }

        // --- 3. Integração WhatsApp ---
        function enviarWhatsapp() {
            const nome = document.getElementById('nome-cliente').value;
            const assunto = document.getElementById('assunto-cliente').value;
            
            // Seu número extraído do portfólio antigo
            const meuNumero = "5524993116757"; 

            if(!nome) {
                alert("Por favor, digite seu nome.");
                return;
            }

            const mensagem = `Olá Christian! Me chamo ${nome}. Gostaria de falar sobre: ${assunto || 'Projetos de TI'}.`;
            const link = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;
            window.open(link, '_blank');
        }

        // --- 4. Menu Mobile ---
        const hamburguer = document.getElementById("hamburguer");
        const menu = document.querySelector(".menu-links");

        hamburguer.addEventListener("click", () => {
        menu.classList.toggle("ativo");
        });