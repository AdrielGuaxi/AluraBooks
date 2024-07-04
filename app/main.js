let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscarLivrosAPI()

async function getbuscarLivrosAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}
