class ModulesDomManipulation {
    constructor() {
        // Podemos adicionar mais propriedades aqui, se necessário no futuro
    }

    getElementDom(idOperation, idElement) {
        try {
            switch (idOperation) {
                case 1: // selecionar elementos via ID
                    return document.getElementById(idElement);
    
                case 2: // selecionar elementos via tag
                    return document.getElementsByTagName(idElement);
    
                case 3: // selecionar elementos via classe
                    return document.getElementsByClassName(idElement);
    
                case 4: // selecionar elementos via seletor CSS (querySelector)
                    return document.querySelector(idElement);
    
                case 5: // selecionar todos os elementos via seletor CSS (querySelectorAll)
                    return document.querySelectorAll(idElement);
    
                default:
                    console.error("Operação não reconhecida");
                    break;
            }
        } catch (error) {
            console.error("Erro ao selecionar um elemento no DOM: ", error);
        }
    }

    // Obter valor de um elemento (por exemplo, input ou textarea)
    getValueElement(idOperation, idElement) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            return element ? element.value : null; // Retorna o valor ou null se o elemento não existir
        } catch (error) {
            console.error("Erro ao obter o valor de um elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Definir valor de um elemento (por exemplo, input ou textarea)
    setValueElement(idOperation, idElement, value) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.value = value; // Define o valor do elemento
            }
        } catch (error) {
            console.error("Erro ao definir o valor de um elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Adicionar uma classe CSS a um elemento
    addClassToElement(idOperation, idElement, className) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.classList.add(className); // Adiciona a classe ao elemento
            }
        } catch (error) {
            console.error("Erro ao adicionar a classe ao elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Remover uma classe CSS de um elemento
    removeClassFromElement(idOperation, idElement, className) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.classList.remove(className); // Remove a classe do elemento
            }
        } catch (error) {
            console.error("Erro ao remover a classe do elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Adicionar um evento de clique a um elemento
    addClickEventToElement(idOperation, idElement, callback) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.addEventListener('click', callback); // Adiciona o evento de clique
            }
        } catch (error) {
            console.error("Erro ao adicionar evento de clique no elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Modificar o estilo de um elemento
    setStyleElement(idOperation, idElement, styleProperty, styleValue) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.style[styleProperty] = styleValue; // Modifica o estilo do elemento
            }
        } catch (error) {
            console.error("Erro ao modificar o estilo do elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Mostrar um elemento (alterando o display para 'block')
    showElement(idOperation, idElement) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.style.display = 'block'; // Exibe o elemento
            }
        } catch (error) {
            console.error("Erro ao mostrar o elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Esconder um elemento (alterando o display para 'none')
    hideElement(idOperation, idElement) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                element.style.display = 'none'; // Esconde o elemento
            }
        } catch (error) {
            console.error("Erro ao ocultar o elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }

    // Alternar visibilidade de um elemento (toggle)
    toggleElementVisibility(idOperation, idElement) {
        try {
            const element = this.getElementDom(idOperation, idElement);
            if (element) {
                // Verifica se o elemento está visível ou não
                element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
            }
        } catch (error) {
            console.error("Erro ao alternar a visibilidade do elemento com o id: ", idElement, 'Juntamente com esse erro: ', error);
        }
    }
}
