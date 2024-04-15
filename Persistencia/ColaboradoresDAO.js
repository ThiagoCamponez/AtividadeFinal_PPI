import conectar from "./Conexao.js";
import Colaboradores from "../Modelo/Colaboradores.js";

export default class ColaboradoresDAO{
    async gravar(colaborador){
        if (colaborador instanceof Colaboradores){
            const conexao = await conectar();
            const sql = `INSERT INTO colaborador (nome, cpf, contato, endereco, bairro, numero, datanascimento, cargo, areaatuacao, anosexperiencia, nivelescolaridade
                         ) 
                         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                colaborador.nome,
                colaborador.cpf,
                colaborador.contato,
                colaborador.endereco, 
                colaborador.bairro,
                colaborador.numero,
                colaborador.datanascimento,
                colaborador.cargo,
                colaborador.areaatuacao,
                colaborador.anosexperiencia,
                colaborador.nivelescolaridade
            ];
            const [resultados, campos] = await conexao.execute(sql,parametros);
            colaborador.codigo = resultados.insertId; 
        }
    }

    async atualizar(colaborador){
        if (colaborador instanceof Colaboradores){
            const conexao = await conectar();
            const sql = `UPDATE colaborador SET nome = ?, cpf = ?, contato = ?, endereco = ?, bairro = ?, numero = ?, datanascimento = ?, cargo = ?, areaatuacao = ?, anosexperiencia = ?, nivelescolaridade = ?
                         WHERE id = ?`;
            const parametros = [                
                colaborador.id,
                colaborador.nome,
                colaborador.cpf,
                colaborador.contato,
                colaborador.endereco,
                colaborador.bairro,
                colaborador.numero,
                colaborador.datanascimento,
                colaborador.cargo,
                colaborador.areaatuacao,
                colaborador.anosexperiencia,
                colaborador.nivelescolaridade
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(colaborador){
        if (colaborador instanceof Colaboradores){
            const conexao = await conectar();
            const sql = `DELETE FROM colaborador WHERE id = ?`;
            const parametros = [
                colaborador.id
            ]
            await conexao.execute(sql,parametros);
        }
    }

    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(parseInt(termoDePesquisa))){ 
            sql = `SELECT * FROM colaborador WHERE nome LIKE ?`; 
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM colaborador WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);
        let listaColaborador = [];
        for (const registro of registros){
            const colaborador = new Colaboradores(
                registro.id,
                registro.nome,
                registro.cpf,
                registro.contato,
                registro.endereco,
                registro.bairro,
                registro.numero,
                registro.datanascimento
            );
            listaColaborador.push(colaborador);
        }
        return listaColaborador;
    }

}