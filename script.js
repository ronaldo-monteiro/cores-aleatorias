
// Seleciona o elemento do quadrado e o elemento para exibir a cor
const quadrado = document.getElementById('quadrado'); // aprendi com Pietro ahaha! //
const corDisplay = document.getElementById('corDisplay'); 

// Função que gera uma cor aleatória em formato RGB
function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256); // Gera um valor aleatório entre 0 e 255 para o vermelho
    const g = Math.floor(Math.random() * 256); // Gera um valor aleatório entre 0 e 255 para o verde
    const b = Math.floor(Math.random() * 256); // Gera um valor aleatório entre 0 e 255 para o azul
    return `rgb(${r}, ${g}, ${b})`; // Retorna a cor no formato RGB
}

// Adiciona um  evento para o clique no quadrado
quadrado.addEventListener('click', () => {
    // Gera uma nova cor aleatória
    const novaCor = gerarCorAleatoria();
    
    // Aplica a nova cor ao quadrado
    quadrado.style.backgroundColor = novaCor;
    
    // Atualiza o texto com a nova cor RGB
    corDisplay.textContent = `Cor atual: ${novaCor}`;
});
