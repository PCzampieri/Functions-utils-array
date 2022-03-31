//remove itens array
/**
 * Set
O objeto Set permite que você armazene valores únicos de qualquer tipo, 
desde valores primitivos a referências a objetos.

DEMO
var meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
var o = {a: 1, b: 2};
meuSet.add(o);

meuSet.add({a: 1, b: 2}); //  o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5);              // true
meuSet.has(Math.sqrt(25));  // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 5

meuSet.delete(5); // remove 5 do set
meuSet.has(5);    // false, 5 já foi removido

meuSet.size; // 4, nós simplesmente removemos um valor

console.log(meuSet) // Set { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
 */

const radioArr = ['RD 1', 'RD 1', 'RD 2', 'RD 3', 'RD 3', 'RD 4']
const radiosArrUnique = new Set() // aceita dados únicos
radioArr.forEach((radio) => {
  radiosArrUnique.add(radio)
})
const radioUniqueFiltered = Array(...radiosArrUnique.values())
console.log(radioUniqueFiltered)

// remove itens array with objects ------------------------------------
/**
 * Map
O objeto Map contém pares de chave-valor e lembra a ordem original da inserção 
das chaves. Qualquer valor (objetos e valores primitivos) 
podem ser usados como chave ou valor.

DEMO:

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
 */

const redeArray = [
  { radio: 'RD 1', mac: '1515255' },
  { radio: 'RD 2', mac: '12215134' },
  { radio: 'RD 2', mac: '11855234' },
  { radio: 'RD 3', mac: '12345215' },
  { radio: 'RD 3', mac: '12534235' }
]
const radiosUnique = new Map() //para mantar objeto chave/valor
redeArray.forEach((rede) => {
  if (!radiosUnique.has(rede.radio)) {
    //has é do Map signifa TEM: neste caso senão tem adiciona
    radiosUnique.set(rede.radio, rede)
  }
})
const radiosUniqueFiltered = Array(...radiosUnique.values())
console.log(radiosUniqueFiltered)
