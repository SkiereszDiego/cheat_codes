//ARQUIVO.SERVICE.TS
@Injectavle()
export class UniqueIdService {

private numberOfgenerateIds = 0;

//expressao regular que testa se começa com Maisc ou min ou com hifem
private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

public generateUniqueIdWithPrefix(prefix: string): string {
  if (!prefix) {
    trow Error('Prefix can not be empty');
  }
  const uniqueId = this.generateuniqueId();
  this.numberOfGenerateIds++;
  return `${prefix}-${uniqueId}`;
}
  
  
//ARQUIVO.SPEC.TS
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
    
//     ----deixando organizado
      const emptyValues = [null, undefined, ''];
      emptyValues.forEach(emptyValues => {
       expect(() => service.generateUniqueIdWithPrefix(emptyValues)).toThrow();
      });
    });
});
