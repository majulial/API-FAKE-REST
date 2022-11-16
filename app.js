fetch('http://localhost:3000/clientes?_expand=carro')
.then((req) => req.json())
.then((data) => mostraClientes(data));


function mostraClientes(clientes){
    const htmlClientes = clientes.map((cliente) => `
    <h2>${cliente.nome}</h2>
    <h4>Entrada: ${cliente.entrada}</h4>
    <h4>Carro: ${cliente.carroId}</h4>
    `)

    document.getElementById('app').innerHTML = htmlClientes;
}

//fetch('http://localhost:3000/Carro')
//.then((req) => req.json())
//.then((data) => mostraCarros(data));


//function mostraCarros(Carro){
    //const htmlCarros = Carro.map((Carro) => `
   // <h4>Modelo: ${Carro.modelo}</h4>
    //`)

  //  document.getElementById('aapps').innerHTML = htmlCarros;
//}
