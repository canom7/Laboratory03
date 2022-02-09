const product = { 
    count: 3, 
    price: 12.55, 
    type: "libro" 
};

//Calculo precio sin IVA

let priceNoIva = product.count > 0 ? product.count * product.price : 0 * product.price;

console.log("Precio sin IVA = ", priceNoIva);

//Calculo precio con IVA en funcion del type
let iva = 0;
switch (product.type){
    case "ropa": iva = 0.21;
    break; 
    case "alimentacion": iva = 0.10;
    break; 
    case "libro": iva = 0.04;
    break; 
}

let priceIva = priceNoIva + (priceNoIva * iva)

console.log("Precio con IVA = ", priceIva);


//EXTRA 1
console.log("____________________________________________");

const empleado = {
    bruto: 35500,
    hijos: 0,
    pagas: 12
};

   
if (empleado.bruto < 12000){
    retencion = 0;
}else if (empleado.bruto > 12000 && empleado.bruto < 24000){
    retencion = 0.08;
}else if (empleado.bruto > 24000 && empleado.bruto < 34000){
    retencion = 0.16;
}else if (empleado.bruto > 34000){
    retencion = 0.3;
}

//calculo retencion teniendo en cuento los hijos
let retencionHijos = empleado.hijos > 0 && retencion > 0 ? retencion - 0.02 : retencion;
console.log("La retención a aplicar con hijos es = ", retencionHijos);

//calculo neto anual
let netoAnual = empleado.bruto - (empleado.bruto * retencionHijos);
console.log("El sueldo neto anual es = ", netoAnual);

//calculo neto menual
let netoMenusal = netoAnual / empleado.pagas;
console.log("El sueldo neto mensual es = ", netoMenusal);

