import { Router } from 'express';
import ColaboradoresCtrl from '../Controles/ColaboradoresCtrl.js';



const rotaColaboradores = new Router();
const colaboradoresCtrl = new ColaboradoresCtrl();

rotaColaboradores
.get('/', colaboradoresCtrl.consultar)
.get('/:termo', colaboradoresCtrl.consultar) //atribuindo a função consultar como parâmetro do que executar quando receber um método get na rota
.post('/', colaboradoresCtrl.gravar)
.put('/:codigo', colaboradoresCtrl.atualizar)
.patch('/:codigo', colaboradoresCtrl.atualizar)
.delete('/:codigo', colaboradoresCtrl.excluir);

export default rotaColaboradores;