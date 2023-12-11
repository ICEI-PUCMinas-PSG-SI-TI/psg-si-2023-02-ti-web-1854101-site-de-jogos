
let motivoSelecionado = '';


function selecionarMotivo(motivo) {
  motivoSelecionado = motivo;
}


function bloquearUsuario() {
  const username = document.getElementById('username').value;
  const outroMotivo = document.getElementById('motivo').value;

  
  const motivoFinal = outroMotivo ? `${motivoSelecionado} - ${outroMotivo}` : motivoSelecionado;

  console.log(`Usuário ${username} bloqueado. Motivo: ${motivoFinal}`);

  document.getElementById('username').value = '';
  document.getElementById('motivo').value = '';
}


const year = new Date().getFullYear();
document.querySelector(".footer p").innerHTML = `&copy; ${year} - COPYRIGHT - NO TOXIC ZONE S.A. TODOS OS DIREITOS RESERVADOS.`;


function abrirOpcoes() {
  const opcoesBloqueio = document.getElementById('opcoesBloqueio');

  if (!document.getElementById('opcoesAdicionais')) {
    
    const opcoesAdicionais = document.createElement('div');
    opcoesAdicionais.id = 'opcoesAdicionais';
    opcoesAdicionais.innerHTML = `
      <button onclick="selecionarOpcao('Imagens')">Imagens</button>
      <button onclick="selecionarOpcao('Vídeos')">Vídeos</button>
      <button onclick="selecionarOpcao('Outros')">Outros</button>
      <!-- Adicione quantos botões quiser com diferentes opções -->
    `;
    opcoesBloqueio.appendChild(opcoesAdicionais);
  }
}


function selecionarOpcao(opcao) {
  console.log(`Opção selecionada: ${opcao}`);
}
