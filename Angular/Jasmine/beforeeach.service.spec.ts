<!-- 
Karma roda os testes de maneira aleatoria, ele faz isso para pegar o erro de um teste vazar e pegar o contexto de outro teste.
Garantir com o beforeEach que tenha uma instancia unica para cada it, para que ela exista so durante o teste

-->
import { UniqueIDService } from '.unique-id.service';


describe(UniqueIDService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name} SHOULD generate id WHEN called with prefix`, () => {
<!--     const service = new UniqueIdService() -->
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
});
