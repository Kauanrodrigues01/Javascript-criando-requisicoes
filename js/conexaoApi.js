async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoDados = await conexao.json()
    
    return conexaoDados
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoDados = await conexao.json()
    return conexaoDados
}

export const conectaApi = { listaVideos, criaVideo }