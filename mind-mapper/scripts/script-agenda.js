function mostrarAgenda() {
    document.getElementById('agenda-usuario').style.display = 'block';
    document.getElementById('materias-principais').style.display = 'none';
    document.getElementById('anotacoes').style.display = 'none';
    document.getElementById('mostrar-mapa').style.display = 'none';
    document.getElementById('materias').style.display = 'none';
}

const events = [];

// Função para adicionar uma atividade
function adicionarAtividade() {
    const titulo = document.getElementById('titulo-materia').value;
    const data = document.getElementById('data-atividade').value;
    const descricao = document.getElementById('descricao').value;

    if (titulo === '' || data === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const event = {
        titulo,
        data,
        descricao
    };

    events.push(event);
    renderizarEventos();
    limparFormulario();
    salvarNoLocalStorage();
}

// Função para renderizar os eventos na tela
function renderizarEventos() {
    const eventList = document.getElementById('atividade-lista');
    eventList.innerHTML = '';

    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('atividade-item');
        eventItem.innerHTML = `
            <strong>${event.titulo}</strong> <br>
            Data e Hora: ${new Date(event.data).toLocaleString('pt-BR')} <br>
            Descrição: ${event.descricao} <br>
            <button onclick="deletar(${index})">Excluir</button>
        `;
        eventList.appendChild(eventItem);
    });
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('titulo-materia').value = '';
    document.getElementById('data-atividade').value = '';
    document.getElementById('descricao').value = '';
}

// Função para excluir um evento
function deletar(index) {
    events.splice(index, 1);
    renderizarEventos();
    salvarNoLocalStorage();
}

function salvarNoLocalStorage() {
    localStorage.setItem('events', JSON.stringify(events));
}
  
function carregarDoLocalStorage() {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      //events.push(...JSON.parse(storedEvents));
      //renderizarEventos();
        const loadedEvents = JSON.parse(storedEvents);
        events.push(...renderizarEventos);
        renderizarEventos();
    }
}
  
// Chamar essa função quando o site carregar
window.onload = carregarDoLocalStorage;