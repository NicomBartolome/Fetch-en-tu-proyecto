function AbonoPromedio (Abono4,Abono6,Abono8,Abono10,Abono20){

    Abono = parseInt(Math.max(Abono4,Abono6,Abono8,Abono10,Abono20))
    
    TotalCteIngresado = Abono4 + Abono6 + Abono8 + Abono10 + Abono20
    
    IngresoPromedio = ((1100*Abono4)+(1450*Abono6)+(1890*Abono8)+(2210*Abono10)+(3490*Abono20))/5

    TotalFacturado = ((1100*Abono4)+(1450*Abono6)+(1890*Abono8)+(2210*Abono10)+(3490*Abono20))
    
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

let cte4 = parseInt(prompt("Ingrese la cantidad de abonados de 4 Mb - $1100 Final"))
let cte6 = parseInt(prompt("Ingrese la cantidad de abonados de 6 Mb - $1450 Final"))
let cte8 = parseInt(prompt("Ingrese la cantidad de abonados de 8 Mb - $1890 Final"))
let cte10 = parseInt(prompt("Ingrese la cantidad de abonados de 10 Mb - $2210 Final"))
let cte20 = parseInt(prompt("Ingrese la cantidad de abonados de 20 Mb - $3490 Final"))

AbonoPromedio(cte4,cte6,cte8,cte10,cte20)

console.log("La cantidad de clientes ingresados es de " + TotalCteIngresado)
console.log("El total facturado es de $" + TotalFacturado + ".-")
console.log("El ingreso por cliente promedio es de $" + IngresoPromedio)

