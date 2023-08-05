const endpointEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const endpointCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{{UF}}/municipios";
    
    async function buscarEstados() {
        try {
        const response = await fetch(endpointEstados);
        const estados = await response.json();

        const estadoSelect = document.getElementById("estado");
        estados.forEach((estado) => {
            const option = document.createElement("option");
            option.value = estado.sigla;
            option.text = estado.nome;
            estadoSelect.appendChild(option);
        });
        } catch (error) {
        console.error("Erro ao buscar os estados:", error);
        }
    }

    async function buscarCidades(uf) {
        try {
        const response = await fetch(endpointCidades.replace("{{UF}}", uf));
        const cidades = await response.json();

        const cidadeSelect = document.getElementById("cidade");
        cidadeSelect.innerHTML = "<option value=''>Selecione uma cidade</option>";
        cidades.forEach((cidade) => {
            const option = document.createElement("option");
            option.value = cidade.nome;
            option.text = cidade.nome;
            cidadeSelect.appendChild(option);
        });
        } catch (error) {
        console.error("Erro ao buscar as cidades:", error);
        }
    }

    function atualizarCidades() {
        const estadoSelect = document.getElementById("estado");
        const ufSelecionado = estadoSelect.value;

        const cidadeSelect = document.getElementById("cidade");
        cidadeSelect.innerHTML = "<option value=''>Carregando...</option>";

        if (ufSelecionado) {
        buscarCidades(ufSelecionado);
        } else {
        cidadeSelect.innerHTML = "<option value=''>Selecione um estado primeiro</option>";
        }
    }

    buscarEstados();