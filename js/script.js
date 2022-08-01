class abonos{
    constructor(clientes,precio){
        this.clientes = parseInt(clientes);
        this.precio = precio;
    }
}

const servicios = [];
servicios.push(new abonos(prompt("Ingrese la cantidad de abonados de 4 Mb"),(prompt("Ingrese el precio del abono de 4 Mb"))));
servicios.push(new abonos(prompt("Ingrese la cantidad de abonados de 6 Mb"),prompt(("Ingrese el precio del abono de 6 Mb"))));
servicios.push(new abonos(prompt("Ingrese la cantidad de abonados de 8 Mb"),prompt(("Ingrese el precio del abono de 8 Mb"))));
servicios.push(new abonos(prompt("Ingrese la cantidad de abonados de 10 Mb"),prompt(("Ingrese el precio del abono de 10 Mb"))));
servicios.push(new abonos(prompt("Ingrese la cantidad de abonados de 20 Mb"),prompt(("Ingrese el precio del abono de 20 Mb"))));

function AbonoPromedio (Abono4,precio4,Abono6,precio6,Abono8,precio8,Abono10,precio10,Abono20,precio20){

    Abono = parseInt(Math.max(Abono4,Abono6,Abono8,Abono10,Abono20))
    
    TotalCteIngresado = Abono4 + Abono6 + Abono8 + Abono10 + Abono20
    
    IngresoPromedio = ((precio4*Abono4)+(precio6*Abono6)+(precio8*Abono8)+(precio10*Abono10)+(precio20*Abono20))/5

    TotalFacturado = ((precio4*Abono4)+(precio6*Abono6)+(precio8*Abono8)+(precio10*Abono10)+(precio20*Abono20))
    
    switch(Abono){
        case Abono4:
            console.log("El abono mas vendido es el de 4 Mb");
            break;
        case Abono6:
            console.log("El abono mas vendido es el de 6 Mb");
            break;
        case Abono8:
            console.log("El abono mas vendido es el de 8 Mb");
            break;
        case Abono10:
            console.log("El abono mas vendido es el de 10 Mb");
            break;
        case Abono20:
            console.log("El abono mas vendido es el de 20 Mb");
            break;
        default:
            console.log("No se pudo determinar cual es el abono mas vendido");
            break;          
    }
}

let cte4 = servicios[0].clientes;
let precio4 = servicios[0].precio;

let cte6 = servicios[1].clientes;
let precio6 = servicios[1].precio;

let cte8 = servicios[2].clientes;
let precio8 = servicios[2].precio;

let cte10 = servicios[3].clientes;
let precio10 = servicios[3].precio;

let cte20 = servicios[4].clientes;
let precio20 = servicios[4].precio;

AbonoPromedio(cte4,precio4,cte6,precio6,cte8,precio8,cte10,precio10,cte20,precio20)

console.log("La cantidad de clientes ingresados es de " + TotalCteIngresado)
console.log("El total facturado es de $" + TotalFacturado + ".-")
console.log("El ingreso por cliente promedio es de $" + IngresoPromedio)

