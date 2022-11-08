<!-- 
Karma roda os testes de maneira aleatoria, ele faz isso para pegar o erro de um teste vazar e pegar o contexto de outro teste.
Garantir com o beforeEach que tenha uma instancia unica para cada it, para que ela exista so durante o teste

-->
import { UniqueIDService } from '.unique-id.service';

describe(UniqueIDService.name, () => {
  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name}
    should generate id when called with prefix`, () => {
    toTrow- se ela lança algo queremos capturar e saber qual problema
    expect(service.generateUniqueIdWithPrefix(null)).toThrow(); 
  });
});
