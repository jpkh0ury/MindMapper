function mostrarAnotacao() {
    document.getElementById('anotacoes').style.display = 'block';
    document.getElementById('agenda-usuario').style.display = 'none';
    document.getElementById('materias-principais').style.display = 'none';
    document.getElementById('materias').style.display = 'none';
    document.getElementById('mostrar-mapa').style.display = 'none';
}

const botaoSalvar = document.getElementById('salvar');
const campoNota = document.getElementById('nota');
const sectionAnotacoes = document.getElementById('anotacoes');

// Carregar anotações do localStorage ao carregar a página
window.onload = function() {
    const anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes.forEach(anotacao => {
        criarElementoNota(anotacao);
    });
};

// Salvar nota
botaoSalvar.addEventListener('click', function() {
    const nota = campoNota.value;
    if (nota) {
        criarElementoNota(nota);
        salvarAnotacao(nota);
        campoNota.value = ''; // Limpar o campo de entrada
    }
});

// Função para criar um elemento de anotação
function criarElementoNota(nota) {
    const notaDiv = document.createElement('div');
    notaDiv.className = 'nota-final';
    notaDiv.textContent = nota;
    sectionAnotacoes.appendChild(notaDiv);
}

// Função para salvar a anotação no localStorage
function salvarAnotacao(nota) {
    const anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes.push(nota);
    localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
}