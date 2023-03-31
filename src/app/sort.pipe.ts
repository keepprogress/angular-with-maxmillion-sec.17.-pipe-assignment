import { Pipe, PipeTransform } from '@angular/core';

class Server {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): Array<Server> {
      return value.sort((a, b) => {
        if (a[propName] > b[propName]) {
          return 1;
        } else {
          return -1;
        }
      });
  }
}
