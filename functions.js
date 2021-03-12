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


//funcoes anonimas
var square2 = function(numero) {return numero * numero};

//fatorial
var fatorial = function fac(n) { return n < 2 ? 1 : n * fac( n - 1 ) };

//funcoes de ordem superior
map(function(x) {return x*x*x}, [0,1,2,5,10]);

//funções aninhadas
function addSquares(a, b){
  function square(x){
    return x * x;
  }
  return square(a) + square(b);
}

function fora(x){
	function dentro(y){
		return x + y;
	}
	return dentro; //basicamente eu estou retornando uma função para quem chamar a funcao fora
}


function A(x){
	function B(y){
		function C(z){
			alert(x + y + z);
		}
		C(3);
	}
	B(2);
}
A(1);


// closure
//quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa

var pet = function(nome){
	var getNome = function (){
		return nome;
	}
	return getNome;
},
	mypet = pet("Vivie");

myPet();
