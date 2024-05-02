let resposta = document.getElementById('resposta')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{
    let endereco = document.getElementById('endereco').value

    fetch('https://viacep.com.br/ws/'+endereco+'/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = 'CEP: ' + dados.cep + '<br>'
        resposta.innerHTML += 'localidade: ' + dados.localidade + '<br>'
        resposta.innerHTML += 'logradouro: ' + dados.logradouro + '<br>'
        resposta.innerHTML += 'bairro: ' + dados.bairro + '<br>'
        resposta.innerHTML += 'estado: ' + dados.uf + '<br>'

            resposta.style.fontSize = '1.4rem'
            resposta.style.fontWeight = 'bold'
    })
    .catch((err)=>{
        console.error("Erro fr busca de dados", err)
    })
})