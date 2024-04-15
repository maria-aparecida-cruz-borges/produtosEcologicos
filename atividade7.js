let produtosEcologicos = [
    { nome: 'Copo de bambu', disponivel: true },
    { nome: 'Sacola retornável', disponivel: false },
    { nome: 'Escova de dentes de bambu', disponivel: true },
    { nome: 'Canudos de metal', disponivel: true },
    { nome: 'Frasco de vidro para armazenamento', disponivel: false }
];

let produtosDisponiveis = [];

for (let i = 0; i < produtosEcologicos.length; i++) {
    if (produtosEcologicos[i].disponivel) {
        produtosDisponiveis.push(produtosEcologicos[i]);
    }
}

console.log("Produtos disponíveis:");
console.log(produtosDisponiveis);