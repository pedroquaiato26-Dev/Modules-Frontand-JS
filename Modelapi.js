class APIdataREST {
    constructor() {
    
    }
  
    async apiFunctionDeterminated(idOperations, endpoint, dados) {
      try {
        switch (idOperations) {
          case 1: // Enviar dados
            try {
              const req = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
              });
              return await req.json(); // Retorna resposta da API
            } catch (error) {
              console.error('Erro ao enviar dados para a API:', error);
            }
            break;
  
          case 2: // Receber dados
            try {
              const res = await fetch(endpoint, { method: 'GET' });
              return await res.json(); // Retorna os dados recebidos
            } catch (error) {
              console.error('Erro ao receber dados da API:', error);
            }
            break;
  
          default:
            console.error('Operação inválida.');
        }
      } catch (error) {
        console.error('Erro ao determinar a função da API:', error);
      }
    }
  }
 

  