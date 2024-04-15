import Colaboradores from "../Modelo/Colaboradores.js";


export default class ColaboradoresCtrl{
    
    gravar(requisicao, resposta){
       
        resposta.type('application/json');

       
        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body; 
            const nome = dados.nome;
            const cpf = dados.cpf;
            const contato = dados.contato;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const numero = dados.numero;
            const datanascimento = dados.datanascimento;
            const cargo = dados.cargo;
            const areaatuacao = dados.areaatuacao;
            const anosexperiencia = dados.anosexperiencia;
            const nivelescolaridade = dados.nivelescolaridade;

            
            if (nome && cpf && contato && endereco && bairro && numero && datanascimento && cargo && areaatuacao && anosexperiencia && nivelescolaridade){
                const colaborador = new Colaboradores(0, nome, cpf, contato, endereco, bairro, numero, datanascimento, cargo, areaatuacao, anosexperiencia, nivelescolaridade, anexardocumentos);
                colaborador.gravar().then(()=>{  
                    resposta.status(201);
                    resposta.json({
                        "status":true,
                        "mensagem": "Colaborador gravado com sucesso!",
                        "codigo_colaborador": colaborador.codigo
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível armazenar o colaborador!" + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Favor informar todos os dados do Colaborador, conforme documentação da API"
                });
            }   
      }
      else{
        resposta.status(400);
        resposta.json({
            "status":false,
            "mensagem": "Requisição inválida! Esperando o método POST e dados no formato JSON, para gravar um Colaborador!"
        })
      }
  }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');

        if ((requisicao.method === "PATCH" || requisicao.method === "PUT") && requisicao.is('application/json')) {
            const dados = requisicao.body; 
            const id = requisicao.params.codigo;

            if (id && id > 0 && dados) {
                const { 
                    nome, cpf, contato, endereco, bairro, 
                    numero, datanascimento, cargo, areaatuacao, 
                    anosexperiencia, nivelescolaridade
                } = dados;

                if (nome && cpf && contato && endereco && bairro && numero && datanascimento && cargo && areaatuacao && anosexperiencia && nivelescolaridade) {
                    const colaborador = new Colaboradores(id, nome, cpf, contato, endereco, bairro, numero, datanascimento, cargo, areaatuacao, anosexperiencia, nivelescolaridade);
                    
                    colaborador.atualizar()
                        .then(() => {
                            resposta.status(200);
                            resposta.json({
                                "status": true,
                                "mensagem": "Colaborador atualizado com sucesso!!"
                            });
                        })
                        .catch(erro => {
                            resposta.status(500);
                            resposta.json({
                                "status": false,
                                "mensagem": "Não foi possível atualizar o Colaborador: " + erro.message
                            });
                        });
                } else {
                    resposta.status(400);
                    resposta.json({
                        "status": false,
                        "mensagem": "Informe todos os dados do Colaborador, conforme documentação da API"
                    });
                }
            } else {
                resposta.status(400);
                resposta.json({
                    "status": false,
                    "mensagem": "ID do Colaborador inválido"
                });
            }
        } else {
            resposta.status(405);
            resposta.json({
                "status": false,
                "mensagem": "Requisição inválida! Esperando o método PATCH"
            });
        }
}


    excluir(requisicao, resposta){
    resposta.type('application/json');
    if (requisicao.method === "DELETE"){
        const id = requisicao.params.codigo;
        if (id && id > 0){
            const colaborador = new Colaboradores(id);
            colaborador.excluir()
            .then(()=>{
                resposta.status(200);
                resposta.json({
                    "status":true,
                    "mensagem": "Colaborador excluído com sucesso!!",
                })
            })
            .catch((erro) =>{
                resposta.status(500);
                resposta.json({
                    "status":false,
                    "mensagem": "Não foi possível excluir o Colaborador!!" + erro.message
                })
            })
        }
        else{
            resposta.status(400);
            resposta.json({
                "status":false,
                "mensagem": "Favor informar o código do Colaborador que deseja excluir conforme documentação da API"
            })
        }
    }
    else{
        resposta.status(405);
        resposta.json({
            "status":false,
            "mensagem": "Requisição inválida. Favor usar o método DELETE para excluir um Colaborador"
        })
    }
}

consultar(requisicao, resposta){
    resposta.type('application/json');
    if (requisicao.method === "GET"){
        const termoDePesquisa = requisicao.params.termo;
        const colaborador = new Colaboradores(0);
        colaborador.consultar(termoDePesquisa)
        .then((colaboradores)=>{
            resposta.status(200);
            resposta.json(colaboradores);
        })
        .catch((erro) =>{
            resposta.status(500);
            resposta.json({
                "status":false,
                "mensagem": "Não foi possível consultar os Colaboradores" + erro.message
            })
        })
    }
    else{
        resposta.status(405);
        resposta.json({
            "status":false,
            "mensagem": "Requisição inválida. Aguardando método GET para consulta."
        })
    }
}
}