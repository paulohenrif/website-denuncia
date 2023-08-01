function clickNavbar() {
    if (navbar.style.display == 'block'){
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'block'
    }
}


const ulrUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

window.addEventListener( 'load', async () => {
    const request = await fetch(ulrUF)
    const response = await request.json()

    console.log(response[26].sigla)
    response.forEach(function(uf){
        console.log(uf.sigla)
    })
})