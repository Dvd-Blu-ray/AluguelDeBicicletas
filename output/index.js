"use strict";
console.log("Bem vindo à locadora de bicicletas Dvd-Bluray! :)");
class Bicicleta {
    constructor(codigo, aro, marca, cor, custo_dia) {
        this.codigo = codigo;
        this.aro = aro;
        this.marca = marca;
        this.cor = cor;
        this.custo_dia = custo_dia;
    }
}
class Cliente {
    constructor(cpf, nome, endereco, contato) {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }
}
class Pedido {
    constructor(_cliente, _bicicleta, _numero, _duracao, _custo) {
        this._cliente = _cliente;
        this._bicicleta = _bicicleta;
        this._numero = _numero;
        this._duracao = _duracao;
        this._custo = _custo;
    }
}
class Atendente {
    constructor(nome, registro, pedidos) {
        this.nome = nome;
        this.registro = registro;
        this.pedidos = pedidos;
    }
    cadastro(cpf, nome, endereco, contato) {
        return new Cliente(cpf, nome, endereco, contato);
    }
    realizar_pedido(_cliente, _bicicleta, _duracao, _numero) {
        let _custo;
        this.pedidos.push(_numero);
        _custo = _duracao * _bicicleta.custo_dia;
        return new Pedido(_cliente, _bicicleta, _numero, _duracao, _custo);
    }
}
class Locadora {
    constructor(nome, endereco, qnt_bicicletas, pedidos, atendentes, bicicletas, clientes) {
        this.nome = nome;
        this.endereco = endereco;
        this.qnt_bicicletas = qnt_bicicletas;
        this.pedidos = pedidos;
        this.atendentes = atendentes;
        this.bicicletas = bicicletas;
        this.clientes = clientes;
    }
    contratar(nome, registro) {
        let pedidos = [];
        let atendente = new Atendente(nome, registro, pedidos);
        this.atendentes.push(atendente);
    }
}
