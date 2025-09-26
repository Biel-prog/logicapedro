let listaTimes = ["Corinthians", "Santos", "Palmeiras"]

//Acessar um item do array
console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);

//adicionar itens no fim do array
listaTimes.push("São Paulo")
listaTimes.push("Flamengo")
console.log(listaTimes);

//verificar tamanho da lista
console.log(listaTimes.length);

//adicionar um item na primeira posição
listaTimes.unshift("Fluminense")
console.log(listaTimes)

//remove o primeiro item do array
listaTimes.shift()
console.log(listaTimes);

//remover o ultimo elemento do array
listaTimes.pop()
console.log(listaTimes);

//encontrar a posição de um elemento no array
console.log(listaTimes.indexOf("Santos"))

////////////////////////////////////////////////////////////////

let listaNomes = ["Marcos", "Diego", "Camila", "Matheus"]

//remover elementos do array a partir da posição
//splice, parametros de qual posição partir, e quantos elementos remover a partir da posição

listaNomes.splice(1,1) //Marcos foi removido
console.log(listaNomes);
listaNomes.push("Gabriel")

//substituir elementos da array
listaNomes.splice(1, 1, "Robson")
console.log(listaNomes);

//adicionando itens pela posição
listaNomes.splice(2,0, "Bruno", "Barbara")
console.log(listaNomes);