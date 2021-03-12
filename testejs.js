function nome(){
	const a = 10;
	const b = 20;
	return 'miqueias';
}


function logFn(fn){
	console.log(fn());

}

const resultado = logFn;

resultado(nome);
