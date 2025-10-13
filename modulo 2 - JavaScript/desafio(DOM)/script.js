// Array para armazenar os alunos. Fica fora das funções para que todas possam acessá-lo.
let alunos = [];

// Função para exibir os alunos na tela.

function exibirAlunos(listaParaExibir) {
    // Pega o elemento <ul> da lista de alunos usando seu ID.
    const listaUl = document.getElementById('listaAlunos');
    
    // Cria uma variável de texto vazia para "acumular" o HTML dos itens da lista.
    let htmlFinal = '';
    
    // Usa um laço 'for' para passar por cada aluno no array.
    for (let i = 0; i < listaParaExibir.length; i++) {
        const aluno = listaParaExibir[i];
        
        // Define a classe CSS correta (aprovado ou reprovado) com base na nota.
        let classe = 'reprovado';
        if (aluno.nota >= 7) {
            classe = 'aprovado';
        }
        
        // Adiciona o HTML do aluno à nossa variável de texto.
        // Usei "+=" para ir acumulando o HTML de todos os alunos.
        htmlFinal += `
            <li class="item-aluno ${classe}">
                <span>${aluno.nome}</span>
                <span>Nota: ${aluno.nota}</span>
            </li>
        `;
    }
    
    //  Finalmente, insere a string completa de HTML na lista de uma só vez.
    listaUl.innerHTML = htmlFinal;
}

// Função para cadastrar um novo aluno. É chamada pelo 'onclick' do botão.
function cadastrarAluno() {
    // Pega os elementos de input do nome e da nota.
    const nomeInput = document.getElementById('nomeAluno');
    const notaInput = document.getElementById('notaAluno');
    
    // Pega os VALORES de dentro dos inputs.
    const nome = nomeInput.value;
    const nota = parseFloat(notaInput.value);
    
    // Verifica se os valores são válidos.
    if (nome && !isNaN(nota) && nota >= 0 && nota <= 10) {
        // Cria um objeto com os dados do aluno e o adiciona no array 'alunos'.
        alunos.push({ nome: nome, nota: nota });
        
        // Limpa os campos para o próximo cadastro.
        nomeInput.value = '';
        notaInput.value = '';
        
        // Chama a função para mostrar a lista atualizada na tela.
        exibirAlunos(alunos);
    } else {
        alert("Por favor, preencha o nome e uma nota válida entre 0 e 10.");
    }
}

// Função para filtrar e mostrar apenas os aprovados.
function filtrarAprovados() {
    // Cria um novo array vazio para guardar apenas os aprovados.
    const alunosAprovados = [];
    
    // Usa um laço 'for' para verificar cada aluno do array principal.
    for (let i = 0; i < alunos.length; i++) {
        // 3. Se a nota do aluno for 7 ou mais...
        if (alunos[i].nota >= 7) {
            // ...adiciona esse aluno ao array de aprovados.
            alunosAprovados.push(alunos[i]);
        }
    }
    
    // Chama a função de exibição, mas passando apenas a lista de aprovados.
    exibirAlunos(alunosAprovados);
}

// Função para mostrar todos os alunos novamente.
function mostrarTodos() {
    // Simplesmente chama a função de exibição com o array original completo.
    exibirAlunos(alunos);
}