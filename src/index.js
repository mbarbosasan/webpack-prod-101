import axios from "axios";
import { listarUsuarios } from "./listarUsuarios";

console.log("Hello World!");

axios.get('https://64e0d28850713530432cb8a3.mockapi.io/usuarios').then((response) => {
  console.log(response.data)
  listarUsuarios(response.data);
})


