document.getElementById("calcular").addEventListener("click", function() {
  const faturamentoPorEstado = {
      "SP": 67836.43,
      "RJ": 36678.66,
      "MG": 29229.88,
      "ES": 27165.48,
      "Outros": 19849.53
  };

  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

  let tabela = document.getElementById("tabela-faturamento");
  tabela.innerHTML = ""; 

  for (const [estado, faturamento] of Object.entries(faturamentoPorEstado)) {
      const percentual = (faturamento / faturamentoTotal * 100).toFixed(2);
      
      let row = `<tr>
                      <td>${estado}</td>
                      <td>R$ ${faturamento.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                      <td>${percentual}%</td>
                  </tr>`;
      tabela.insertAdjacentHTML('beforeend', row);
  }
});
