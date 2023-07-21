/* Definicao das variaveis */
var js_contador=1;
var js_resposta=true;
/* Laço de Repetição Condicional - while utilizando controle de limitação pelo usuário */
while (js_resposta == true) {
 document.write('<p>' + js_contador + '&ordf; Repetição de uma única linha de comando dentro de um laço condicional: ');
 js_contador += 1;
 js_resposta = window.confirm('Deseja continuar?');
}