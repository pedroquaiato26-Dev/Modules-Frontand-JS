import {APIdataREST} from '../ModulesAPI/Modelapi.js'

const api = new APIdataREST();
  
  api.apiFunctionDeterminated(1, 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Teste API',
      body: 'Isso é um teste',
      userId: 1,
    })
   .then(response => console.log('Resposta do POST:', response));
  
  api.apiFunctionDeterminated(2, 'https://jsonplaceholder.typicode.com/posts/1')