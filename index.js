//remove itens array
const radioArr = ['RD 1','RD 1','RD 2','RD 3','RD 3','RD 4']
const radiosArrUnique = new Set() // aceita dados únicos
radioArr.forEach((radio)=>{
  radiosArrUnique.add(radio)  
})
const radioUniqueFiltered = Array(...radiosArrUnique.values())
console.log(radioUniqueFiltered)

// remove itens array with objects ------------------------------------
const redeArray = [
  { radio: 'RD 1', mac: '1515255' },
  { radio: 'RD 2', mac: '12215134' },
  { radio: 'RD 2', mac: '11855234' },
  { radio: 'RD 3', mac: '12345215' },
  { radio: 'RD 3', mac: '12534235' },
]
const radiosUnique = new Map() //para mantar objeto chave/valor
redeArray.forEach((rede)=>{
  if(!radiosUnique.has(rede.radio)) //has é do Map signifa TEM: neste caso senão tem adiciona
    {
      radiosUnique.set(rede.radio, rede)
    }
})
const radiosUniqueFiltered = Array(...radiosUnique.values())
console.log(radiosUniqueFiltered)




