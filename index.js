import Colaboradores from "./Modelo/Colaboradores.js";


const colaborador = new Colaboradores(1, "Thiago Henrique ","080.370.779-77", "(44)99945-9744", "Rua Joaquim de Souza", "Centro", "188", "1991/03/16", "DBA", "Analista de dados", "1 ano", "Superior");

// console.log(colaborador.toJSON());



// colaborador.gravar().then(() =>{
//     console.log("Colaborador gravado com sucesso!");
// }).catch((erro) => {
//    console.log(erro);
// });



colaborador.atualizar().then(() =>{
    console.log("Colaborador atualizado com sucesso!");
}).catch((erro) => {
   console.log(erro);
});



// colaborador.excluir().then(() =>{
//    console.log("O colaborador foi EXCLUÍDO!");
// }).catch((erro) => {
//     console.log(erro);
// });



// const colaboradorQQ = new Colaboradores();

// colaboradorQQ.consultar().then((listaColaborador) => {
//     console.log("bolaboradores encontrados foram:")
//     for (const colaborador of listaColaborador) {
//         console.log(colaborador.toJSON());
//     }
// }).catch((erro) => {
//     console.log("Não foi possível encontrar o colaborador.", erro);
// });

import express from "express";
import rotaColaboradores from "./Rotas/rotaColaboradores.js";
import cors from "cors"; 
import rotaColaboradores from "./Rotas/rotaColaboradores.js";

// const host = '0.0.0.0';
// const porta = 3000; 

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true})); 

app.use('/colaboradores',rotaColaboradores);
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});