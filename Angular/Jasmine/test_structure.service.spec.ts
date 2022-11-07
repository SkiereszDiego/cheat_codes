<!-- 
expectativa do teste = Esperando que o Id gerado ele tenha o prefixo app-
classe = UniqueIDService
metodo = generateUniqueidWithPrefix 
-->

import { UniqueIDService } from '.unique-id.service';

describe('UniqueIdService', () => {
  it('#generateUniqueidWithPrefix SHOULD generate id WHEN called with prefix', () => {
    const service = new UniqueIdService()
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});


<!-- Blindandno caso altere o nome da classe ou do metodo -->
describe(UniqueIDService.name, () => {
  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name} SHOULD generate id WHEN called with prefix`, () => {
    const service = new UniqueIdService()
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});


<!-- Maneira correto -->
describe(UniqueIDService.name, () => {
  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name} SHOULD generate id WHEN called with prefix`, () => {
    const service = new UniqueIdService()
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
});

<!-- Testar para nao repetir id -->
describe(UniqueIDService.name, () => {
  it(`#${UniqueIDService.prototype.generateUniqueidWithPrefix.name} SHOULD generate id WHEN called with prefix`, () => {
    const service = new UniqueIdService()
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});
