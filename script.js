//pegando os elementos do html
const click = document.getElementById('click');
const retorno = document.getElementById('retorno');

//adicionando um evento ao botão quando clicado
click.addEventListener('click', () => {
	const promessa = new Promise((resolve, reject) => {
		//dessa forma randômica é definido se o resultado é 0(falsy) ou 1(truthy) [de acordo com o stackoverflow]
		const sucesso = Math.random() < 0.5;
		if (sucesso) {
			resolve('Você foi sorteado!');
		} else {
			reject('Quase lá! Você não foi sorteado, tente mais uma vez.');
		}
	});
	/*
	como valor retornado pela promessa é armazenado no parâmetro vou chamar de retornaSucesso ou retornaErro
	o método then é sempre chamado quando a promessa é resolvida com sucesso e o catch quando não
		> uso o textContet para colocar texto na div retorno, não usei o appendChild porque só vou alterar o texto e não colocar um novo elemento
		> após isso, como quero criar um novo elemento crio uma div e dentro dela coloco uma imagem, até mesmo para não quebrar o html
		> e no fim uso um retorno.style.color para manipular a cor do que está dentro do retorno usando verde ou vermelho.
	  */
	promessa
		.then((retornaSucesso) => {
			retorno.textContent = retornaSucesso;
			const divSucesso = document.createElement('div');
			const imagemErro = document.createElement('img');
			imagemErro.src = 'https://media.giphy.com/media/yJFeycRK2DB4c/giphy.gif';
			divSucesso.appendChild(imagemErro);
			retorno.appendChild(divErro);
			retorno.style.color = 'green';
		})
		.catch((retornaErro) => {
			retorno.textContent = retornaErro;
			const divErro = document.createElement('div');
			const imagemErro = document.createElement('img');
			imagemErro.src = 'https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif';
			divErro.appendChild(imagemErro);
			retorno.appendChild(divErro);
			retorno.style.color = 'red';
		});
});
