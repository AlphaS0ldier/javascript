let objetolit = {
  detalles: [ {nombre: "Pelota"}, {origen: "España"}, {destino: "Estados Unidos"} ],
  precio: "20.00",
  tamaño: "grande",
  color: {parteA:"blanco",parteB:"negro"},
  unidades: "1",
  modelo: {codigo:"X64920",nombrecodigo:"XPELOTON10"},
  marca: "PELOTÓN",
};

// Obtener todas las llaves del objeto
console.log(Object.keys(objetolit));

// Obtener todos los valores del objeto
console.log(Object.values(objetolit));
