
// Não temos um bundler para importar o axios, e por isso utilizamos o CDN, no entanto
// nós podemos importar qualquer outro arquivo js que esteja no mesmo diretório que o index.js
// import axios from 'axios'
import { isEven } from "./is-even.js"

console.log(isEven(2, 4))

axios.get('https://64e0d28850713530432cb8a3.mockapi.io/usuarios').then((response) => {
  console.log(response.data)
})