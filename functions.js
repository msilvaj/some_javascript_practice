function square(numero){
  return numero * numero;
}

function minhaFuncao(objeto){
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};

x = meucarro.make; //x <= "Honda"

minhaFuncao(meucarro);
y.meucarro.make; //Nesse caso o valor de make: foi alterado na minhaFuncao
