
// Karma roda os testes de maneira aleatoria, ele faz isso para pegar o erro de um teste vazar e pegar o contexto de outro teste.
// Garantir com o beforeEach que tenha uma instancia unica para cada it, para que ela exista so durante o teste

import { UniqueIDService } from '.unique-id.service';

describe(UniqueIDService.name, () => {
  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name}
    should generate id when called with prefix`, () => {
//     toTrow- se ela lança algo queremos capturar e saber qual problema
    
//     expect(service.generateUniqueIdWithPrefix(null)).toThrow();
//     ---- Vai falhar pq o jasmine n consegue entender que a exceção era pra ser sucesso pq era esperada
//     ---- Se vc esta testando um metodo tu tem que char ele dentro de uma funcao
    
//     expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
//     expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
//     expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
    
//     ----deizando organizado
      const emptyValues = [null, undefined, ''];
      emptyValues.forEach(emptyValues => {
       expect(() => service.generateUniqueIdWithPrefix(emptyValues)).toThrow();
      });
    });
});
