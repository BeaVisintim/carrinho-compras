let totalGeral = 0; // Inicializa aqui direto
limpar();

function adicionar() {
    // Recupera os valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.').trim());
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade.");
        return;
    }

    // Calcula o subtotal
    let preco = quantidade * valorUnitario;

    // Adiciona o produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

    // Atualiza o total
    totalGeral += preco;
    document.getElementById('valor-total').textContent = `R$${totalGeral.toFixed(2)}`;

    // Limpa a quantidade
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0.00';
}
