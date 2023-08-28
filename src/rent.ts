import {Bicicleta, Cliente} from './index' 

export class Rent {
    constructor(
        public bicicleta: Bicicleta,
        public cliente: Cliente,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date
    ) {}
    
    // static canRent(rents: Rent[], startDate: Date, endDate: Date): 
    //     boolean {
    //         let podeAlugar =  !rents.some(rent => { 
    //             return startDate <= rent.dateTo &&
    //                    endDate >= rent.dateFrom
    //         })
    //         if(podeAlugar) console.log("voce pode alugar!")
    //         return podeAlugar
    // }
    
    static canRent(rents: Rent[], startDate: Date, endDate: Date): 
    boolean {
        return !rents.some(rent => { 
            return startDate <= rent.dateTo &&
                   endDate >= rent.dateFrom
        })
    }

    static create(rents: Rent[], bicicleta: Bicicleta, cliente: Cliente, startDate: Date, endDate: Date){
        let canCreate = Rent.canRent(rents, startDate, endDate)
        if (canCreate){
            console.log("Bicicleta alugada com sucesso, "+cliente.nome+"! :)")
            return new Rent(bicicleta, cliente, startDate, endDate)
        }
        // throw new Error ('Bicicleta já alugada')
        console.log("Bicicleta já alugada")
        return null
    }

}

const bicicleta = new Bicicleta(1001, 24, 'caloi', 'azul', 50)
const cliente = new Cliente('457.111.997-57', 'Maria Joana', 'rua do Limoeiro', '(11)4002-8922')
const today = new Date()
let twoDaysLater = new Date() 
let reservas = []
twoDaysLater.setDate(twoDaysLater.getDate() + 2)
const rent1 = Rent.create ([], bicicleta, cliente, today, twoDaysLater)
if(rent1) reservas.push(rent1);
const rent2 = Rent.create (reservas, bicicleta, cliente, today, twoDaysLater)
if(rent2) reservas.push(rent2);

