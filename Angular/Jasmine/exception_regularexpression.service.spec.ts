
// Tem que ter uma expressao regular no arquivo de service por exemplo:

//ARQUIVO.SERVICE.TS
@Injectavle()
export class UniqueIdService {

private numberOfgenerateIds = 0;

//expressao regular que testa se começa com Maisc ou min ou com hifem
private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

public generateUniqueIdWithPrefix(prefix: string): string {
  //chamando expressao regular q se esse prefixo nao seguir minha regra ele vai chamar a exceção
  //teste é preciso refatorar quando modifica a implementação do teste
  if (!prefix || !this.validId.test(prefix)) {
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
    
      const emptyValues = [null, undefined, ''];
      emptyValues.forEach(emptyValues => {
       expect(() => service.generateUniqueIdWithPrefix(emptyValues)).toThrow();
      });
    });
});
