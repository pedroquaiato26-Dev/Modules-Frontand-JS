import {ModulesDomManipulation} from '../DomModules/DOMmodules.js'


// Criação de uma instância da classe
const domManipulation = new ModulesDomManipulation();

// Exemplo de chamada de funções
document.getElementById('showPopupButton').addEventListener('click', function() {
    domManipulation.showElement(1, 'popup'); // Exemplo de mostrar um pop-up
});

document.getElementById('hidePopupButton').addEventListener('click', function() {
    domManipulation.hideElement(1, 'popup'); // Exemplo de ocultar um pop-up
});

document.getElementById('togglePopupButton').addEventListener('click', function() {
    domManipulation.toggleElementVisibility(1, 'popup'); // Exemplo de alternar visibilidade do pop-up
});

document.getElementById('closePopupButton').addEventListener('click', function() {
    domManipulation.hideElement(1, 'popup'); // Fechar o pop-up
});

// Modificando o valor de um campo
domManipulation.setValueElement(1, 'inputField', 'Novo valor'); // Suponha que 'inputField' é um campo de input.

// Obtendo o valor de um campo
const inputValue = domManipulation.getValueElement(1, 'inputField');
console.log('Valor do campo:', inputValue);