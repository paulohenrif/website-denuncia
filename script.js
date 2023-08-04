function clickNavbar() {
    if (navbar.style.display == 'block'){
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'block'
    }
}

const ulrUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

const uf = document.getElementById("uf")

uf.addEventListener('chance', async function() {
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
    const request = await fetch(urlCidades)
    const response = await request.json()
    console.log(response[0].nome)
})

window.addEventListener( 'load', async () => {
    const request = await fetch(ulrUF)
    const response = await request.json()

    console.log(response[26].sigla)
    response.forEach(function(uf){
        console.log(uf.sigla)
    })
})