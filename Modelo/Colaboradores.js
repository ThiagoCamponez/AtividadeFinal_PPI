import ColaboradoresDAO from "../Persistencia/ColaboradoresDAO.js";

export default class Colaboradores {
    
    #id;
    #nome;
    #cpf;
    #contato;
    #endereco;
    #bairro;
    #numero;    
    #datanascimento;
    #cargo;
    #areaatuacao;
    #anosexperiencia;
    #nivelescolaridade;
    

    constructor(id=0, nome="", cpf="", contato="", endereco="", bairro="", numero="", datanascimento="", cargo="", areaatuacao="", anosexperiencia="", nivelescolaridade=""){
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#contato = contato;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#numero = numero;
        this.#datanascimento = datanascimento;
        this.#cargo = cargo;
        this.#areaatuacao = areaatuacao;
        this.#anosexperiencia = anosexperiencia;
        this.#nivelescolaridade = nivelescolaridade;
    }

    get codigo(){
        return this.#id;
    }

    set codigo(novoId){
        this.#id = novoId;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get contato(){
        return this.#contato;
    }

    set contato(novoContato){
        this.#contato = novoContato;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get numero(){
        return this.#numero;
    }

    set numero(novoNumero){
        this.#numero = novoNumero;
    }

    get datanascimento(){
        return this.#datanascimento;
    }

    set datanascimento(novoDatanascimento){
        this.#datanascimento = novoDatanascimento;
    }

    get cargo(){
        return this.#cargo;
    }

    set cargo(novoCargo){
        this.#cargo = novoCargo;
    }

    get areaatuacao(){  
        return this.#areaatuacao;
    }
    
    set areaatuacao(novaAreaatuacao){
        this.#areaatuacao = novaAreaatuacao;
    }

    get anosexperiencia(){
        return this.#anosexperiencia;
    }

    set anosexperiencia(novoAnosexperiencia){
        this.#anosexperiencia = novoAnosexperiencia;
    }

    get nivelescolaridade(){
        return this.#nivelescolaridade;
    }

    set nivelescolaridade(novoNivelescolaridade){
        this.#nivelescolaridade = novoNivelescolaridade;
    }


    async gravar(){
        const dao = new ColaboradoresDAO();
        await dao.gravar(this); 
    }

    async atualizar(){
        const dao = new ColaboradoresDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new ColaboradoresDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new ColaboradoresDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Colaboradores código: ${this.#id} -  nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "codigo": this.#id,
            "nome": this.#nome,
            "cpf": this.#cpf,
            "contato": this.#contato,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "numero": this.#numero,
            "datanascimento": this.#datanascimento,
            "cargo": this.#cargo,
            "areaatuacao": this.#areaatuacao,
            "anosexperiencia": this.#anosexperiencia,
            "nivelescolaridade": this.#nivelescolaridade
        }
    }
}