const itemInput = document.getElementById('item');
const quantidadeInput = document.getElementById('quantidade');
const lista = document.getElementById('lista');
const adicionarButton = document.getElementById('adicionar');
const limparButton = document.getElementById('limpar');

let itens = [];

function adicionarItem() {
  const item = itemInput.value;
  const quantidade = quantidadeInput.value;

  if (item !== '' && quantidade !== '') {
    const novoItem = {
    quantidade: quantidade,
    nome: item,   
  };

    itens.push(novoItem);

    itemInput.value = '';
    quantidadeInput.value = '';

    mostraLista();
  }
}

function removeItem(index) {
  itens.splice(index, 1);

  mostraLista();
}

function limparLista() {
  itens = [];

  mostraLista();
}

function mostraLista() {
  lista.innerHTML = '';

  itens.forEach((item, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    checkbox.addEventListener('change', () => {
      itemSelecionado(index);
    });

    const span = document.createElement('span');
    span.innerText = `${item.quantidade + " uni"} - ${item.nome} `;

    const button = document.createElement('button');
    button.innerText = 'Remover';
    button.addEventListener('click', () => {
      removeItem(index);
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    lista.appendChild(li);
  });
}

adicionarButton.addEventListener('click', adicionarItem);
limparButton.addEventListener('click', limparLista);
