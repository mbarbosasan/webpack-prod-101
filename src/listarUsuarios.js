export const listarUsuarios = (json) => {
  json.forEach((usuario) => inserirUsuarioNovo(usuario));
}

function inserirUsuarioNovo(usuario) {
  const lista = document.getElementById('lista-usuarios');
  const item = document.createElement('li');
  item.classList.add('usuario-card')
  item.innerHTML = `
    <div>
      <img src="${usuario.foto}" />
    </div>
    <div>
      <p>Nome: ${usuario.nome}</p>
      <p>Sobrenome: ${usuario.sobrenome}</p>
      <p>Idade: ${usuario.idade}</p>
      <p>Monitor: ${usuario.ehMonitor ? 'Sim' : 'Não'}</p>
    </div>
  `
  lista.appendChild(item);
}