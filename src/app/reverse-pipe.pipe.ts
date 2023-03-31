import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {
  transform(value: string, ...args): unknown {
    return value.trim().split('').reverse().join('');
  }

}
