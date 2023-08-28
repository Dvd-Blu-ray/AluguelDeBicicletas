console.log("Bem vindo à locadora de bicicletas Dvd-Bluray! :)")

export class Bicicleta {
    codigo: number
    aro: number
    marca: string
    cor: string
    custo_dia: number
    constructor(codigo: number, aro: number, marca: string, cor: string, custo_dia: number){
        this.codigo = codigo
        this.aro = aro
        this.marca = marca
        this.cor = cor
        this.custo_dia = custo_dia
    }
}

export class Cliente {
    cpf: string
    nome: string
    endereco: string
    contato: string
    
    constructor(cpf:string, nome:string, endereco: string, contato: string){
        this.cpf = cpf
        this.nome = nome
        this.endereco = endereco
        this.contato = contato
    }
}

class Pedido{
    _cliente: Cliente
    _bicicleta: Bicicleta
    _numero: number
    _duracao: number
    _custo: number
    constructor(_cliente: Cliente, _bicicleta: Bicicleta, _numero : number, _duracao: number, _custo: number) {
        this._cliente = _cliente;
        this._bicicleta = _bicicleta;
        this._numero = _numero;
        this._duracao = _duracao;
        this._custo = _custo
    }
}

class Atendente {
    nome: string
    registro: number
    pedidos: Array<number>

    constructor(nome: string, registro: number, pedidos: Array<number>){
        this.nome = nome
        this.registro = registro
        this.pedidos = pedidos
    }
    cadastro(cpf:string, nome:string, endereco: string, contato: string): Cliente{
        return new Cliente(cpf,nome,endereco,contato);
    }
    realizar_pedido(_cliente : Cliente, _bicicleta : Bicicleta, _duracao : number, _numero: number): Pedido{
        let _custo: number
        this.pedidos.push(_numero)
        _custo = _duracao * _bicicleta.custo_dia
        return new Pedido(_cliente,_bicicleta, _numero, _duracao, _custo)
    }
    
}

class Locadora {
    nome: string
    endereco: string
    qnt_bicicletas: number
    pedidos: Array<number>
    atendentes: Array<Atendente>
    bicicletas: Array<Bicicleta>
    clientes:  Array<Cliente>

    constructor(nome: string, endereco: string, qnt_bicicletas: number, pedidos: Array<number>, atendentes: Array<Atendente>, bicicletas: Array<Bicicleta>, clientes: Array<Cliente>){
        this.nome = nome
        this.endereco = endereco
        this.qnt_bicicletas = qnt_bicicletas
        this.pedidos = pedidos
        this.atendentes = atendentes
        this.bicicletas = bicicletas
        this.clientes = clientes
    }
    contratar(nome:string, registro:number) :void {
        let pedidos: number[] = [];
        let atendente = new Atendente(nome,registro, pedidos)
        this.atendentes.push(atendente)
    }
}